import {
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";

export type TextareaInputPropos = {
  label: string,
  placeholder: string;
  error?: string;
  help?: string;
  value?: string;
  onChange?: (value: string) => void;
  isDisabled: boolean;
  isRequired: boolean;
};

export const TextAreaInput = ({
  label,
  placeholder,
  error,
  help,
  value,
  onChange,
  isDisabled,
  isRequired,
}: TextareaInputPropos) => {
  const isInvalid = error ? true : false;
  return (
    <Box>
      <FormControl
        isInvalid={isInvalid}
        isRequired={isRequired}
        isDisabled={isDisabled}
      >
        <Textarea
          p="$4"
          h={176}
          borderRadius="$xl"
          borderWidth={1.5}
          borderColor="$white"
          $focus-borderColor="$primaryDark"
        >
          <TextareaInput
            placeholder={placeholder}
            fontSize="$md"
            p="$0"
            placeholderTextColor="$primaryNormal"
            color="$primaryNormal"
            value={value}
            onChangeText={onChange}
          />
        </Textarea>
        {help ? (
          <FormControlHelper>
            <FormControlHelperText fontSize="$sm" color="$black">
              {help}
            </FormControlHelperText>
          </FormControlHelper>
        ) : null}
        {isInvalid ? (
          <FormControlError>
            {/* <FormControlErrorIcon as={AlertCircleIcon} color="$red"/> */}
            <FormControlErrorText fontSize="$sm" color="$red">{error}</FormControlErrorText>
          </FormControlError>
        ) : null}
      </FormControl>
    </Box>
  );
};
