import {
  AlertCircleIcon,
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

export type TextareaInputProps = {
  placeholder: string;
  error?: string;
  help?: string;
  value?: string;
  onChange?: (value: string) => void;
  isDisabled: boolean;
  isRequired: boolean;
};

export const TextAreaInput = ({
  placeholder,
  error,
  help,
  value,
  onChange,
  isDisabled,
  isRequired,
}: TextareaInputProps) => {
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
            fontSize={15}
            p="$0"
            placeholderTextColor="$primaryNormal"
            color="$primaryNormal"
            value={value}
            onChangeText={onChange}
          />
        </Textarea>
        {help ? (
          <FormControlHelper>
            <FormControlHelperText
              fontFamily="Livvic"
              fontSize="$sm"
              color="$black"
            >
              {help}
            </FormControlHelperText>
          </FormControlHelper>
        ) : null}
        {isInvalid ? (
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} color="$red" />
            <FormControlErrorText fontSize="$sm">{error}</FormControlErrorText>
          </FormControlError>
        ) : null}
      </FormControl>
    </Box>
  );
};
