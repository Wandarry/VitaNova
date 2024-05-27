import { TinyEmitter } from "tiny-emitter";

export const TOAST_EMITTER_EVENT_NAME = "TOAST_EMITTER_EVENT_NAME";

// creating the event emitter instance
const toastEmitter = new TinyEmitter();

export default toastEmitter;
