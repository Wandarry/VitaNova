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
          px="$4"
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
            fontSize="$md"
            p="$0"
            placeholderTextColor="$primaryNormal"
            color="$primaryNormal"
            value={value}
            onChangeText={onChange}
          />
          <InputSlot>
            {/* <InputIcon color="" as={icon} size="lg"/> */}
          </InputSlot>
        </Input>
        {help ? (
          <FormControlHelper>
            <FormControlHelperText>{help}</FormControlHelperText>
          </FormControlHelper>
        ) : null}
        {isInvalid ? (
          <FormControlError>
            {/* <FormControlErrorIcon as={AlertCircleIcon} /> */}
            <FormControlErrorText color="$red">{error}</FormControlErrorText>
          </FormControlError>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default BaseInput;
