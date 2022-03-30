import { compileScript, parse } from "@vue/compiler-sfc";

export function compilerSetup(source: string) {
  const regex = /(?:<script\s+setup>)([^]*?)(?:<\/script>)/gm;
  const results = [...source.matchAll(regex)][0];
  const sfc = results
    ? {
        script_setup: results[1].trim(),
        template: source.replace(results[0], "").trim(),
      }
    : { script_setup: "{}", template: source };

  console.log(sfc);

  const stringifySfc = (sfc: any) => {
    return Object.entries(sfc)
      .map(
        ([tag, content]) =>
          `<${tag.replace("_", " ")}>${content}</${tag.split("_")[0]}>`
      )
      .join("");
  };

  const { descriptor } = parse(stringifySfc(sfc));

  const { content } = compileScript(descriptor, {
    id: "id",
    reactivityTransform: true,
    inlineTemplate: true,
  });

  return content.replace("export default {", "const App = {");
}
