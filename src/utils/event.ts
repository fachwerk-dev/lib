import mitt from "mitt";

const emitter = mitt();

export function emit(name: string, payload?: any): void {
  emitter.emit(name, payload);
}

export function on(name: string, handler = (payload?: any) => {}): void {
  emitter.on(name, handler);
}
