import React from "react";
import {
  Box,
  Input,
  InputField,
  InputSlot,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  InputIcon,
  FormControlErrorIcon,
  AlertCircleIcon,
} from "@gluestack-ui/themed";

export type BaseInputProps = {
  placeholder: string;
  error?: string;
  help?: string;
  isRequired?: boolean;
  icon?: React.ElementType;
  value?: string;
  onChange?: (value: string) => void;
  type?: "text" | "password";
  togglePasswordVisibility?: () => void;
};

const BaseInput = ({
  placeholder,
  icon,
  error,
  help,
  isRequired,
  value,
  onChange,
  type = "text",
  togglePasswordVisibility,
}: BaseInputProps) => {
  const isInvalid = error ? true : false;

  return (
    <Box>
      <FormControl isInvalid={isInvalid} isRequired={isRequired}>
        <Input
          px="$2"
          h={58}
          borderRadius="$xl"
          borderWidth="$1"
          borderColor="$primaryDark"
          $focus-borderWidth={1.5}
          isInvalid={isInvalid}
        >
          <InputField
            type={type}
            placeholder={placeholder}
            fontSize={15}
            p="$0"
            placeholderTextColor="$primaryNormal"
            color="$primaryNormal"
            value={value}
            onChangeText={onChange}
            fontFamily="Livvic"
          />
          <InputSlot onPress={togglePasswordVisibility}>
            <InputIcon color="$primaryNormal" as={icon} size="lg" />
          </InputSlot>
        </Input>
        {help ? (
          <FormControlHelper>
            <FormControlHelperText fontFamily="Livvic" color="$black">
              {help}
            </FormControlHelperText>
          </FormControlHelper>
        ) : null}
        {isInvalid ? (
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{error}</FormControlErrorText>
          </FormControlError>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default BaseInput;
