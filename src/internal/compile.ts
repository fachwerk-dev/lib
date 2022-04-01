import { compile, RenderFunction } from "vue";
import { compileScript, parse, CompilerError } from "@vue/compiler-sfc";

export function compileTemplate(source: string) {
  const errors: CompilerError[] = [];
  let code: RenderFunction | undefined = undefined;
  try {
    const compiledCode = compile(source, {
      onError: (err: any) => {
        errors.push(err);
      },
    });
    code = compiledCode || (() => null);
  } catch (e) {
    errors.push(e as CompilerError);
  }
  return { code, errors };
}

export function isScriptSetup(source: string) {
  const regex = /(?:<script\s+setup>)([^]*?)(?:<\/script>)/gm;
  return !![...source.matchAll(regex)][0];
}

export function compileSfc(source: string) {
  const regex = /(?:<script\s+setup>)([^]*?)(?:<\/script>)/gm;
  const results = [...source.matchAll(regex)][0];
  const sfc = results
    ? {
        script_setup: results[1].trim(),
        template: source.replace(results[0], "").trim(),
      }
    : { script_setup: "{}", template: source };

  const stringifySfc = (sfc: any) => {
    return Object.entries(sfc)
      .map(
        ([tag, content]) =>
          `<${tag.replace("_", " ")}>${content}</${tag.split("_")[0]}>`
      )
      .join("");
  };

  const { descriptor, errors } = parse(stringifySfc(sfc));

  const { content } = compileScript(descriptor, {
    id: "id",
    reactivityTransform: true,
    inlineTemplate: true,
  });

  const code = content.replace("export default {", "const App = {");

  return { code, errors };
}
