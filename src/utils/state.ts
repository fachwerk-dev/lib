import { reactive } from "vue";

type F = Record<string, any>;
export const f = reactive<F>({});
export const data = f;
