import { ToastConfig } from "@/types/toast";
import toastEmitter, { TOAST_EMITTER_EVENT_NAME } from "./emitters";

export const showToast = (toastConfig: ToastConfig) => {
  toastEmitter.emit(TOAST_EMITTER_EVENT_NAME, toastConfig);
};
