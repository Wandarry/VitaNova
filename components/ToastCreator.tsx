import toastEmitter, { TOAST_EMITTER_EVENT_NAME } from "@/helpers/emitters";
import { ToastConfig } from "@/types/toast";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
  VStack,
} from "@gluestack-ui/themed";
import { useCallback, useEffect } from "react";

const ToastCreator = () => {
  const toast = useToast();

  const showToast = useCallback(
    (config: ToastConfig) => {
      // display the toast
      toast.show({
        placement: "bottom",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <Toast nativeID={toastId} variant="solid" action={config.type}>
              <VStack space="xs">
                <ToastTitle>{config.title}</ToastTitle>
                <ToastDescription>{config.description}</ToastDescription>
              </VStack>
            </Toast>
          );
        },
      });
    },
    [toast],
  );

  useEffect(() => {
    // start listening
    // if new message is received call showToast
    toastEmitter.on(TOAST_EMITTER_EVENT_NAME, showToast);

    // this is need to ensure that when the component in unmouted
    // he stop listening
    return () => {
      toastEmitter.off(TOAST_EMITTER_EVENT_NAME, showToast);
    };
  }, [showToast]);

  return null;
};

export default ToastCreator;
