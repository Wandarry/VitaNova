import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  Box,
  Input,
  InputField,
  InputSlot,
  FormControl,
  FormControlError,
  FormControlErrorText,
  InputIcon,
  FormControlErrorIcon,
  AlertCircleIcon,
} from "@gluestack-ui/themed";
import { CalendarMonth } from "@/components/icons/calendarMonth";

export type DateInputProps = {
  placeholder?: string;
  error?: string;
  isRequired?: boolean;
  value?: Date;
  onChange: (date: Date) => void;
};

export const DateInput = ({
  placeholder = "Date de naissance",
  error,
  isRequired,
  value,
  onChange,
}: DateInputProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    onChange(date);
    hideDatePicker();
  };

  const dateString = value?.toLocaleDateString();

  const isInvalid = error ? true : false;

  return (
    <Box>
      <FormControl
        isRequired={isRequired}
        isReadOnly={true}
        isInvalid={isInvalid}
      >
        <Input
          px="$2"
          h={58}
          borderRadius="$xl"
          borderWidth="$1"
          borderColor="$primaryDark"
          $focus-borderWidth={1.5}
        >
          <InputField
            type="text"
            placeholder={placeholder}
            fontSize={15}
            p="$0"
            placeholderTextColor="$primaryNormal"
            color="$primaryNormal"
            value={dateString}
          />
          <InputSlot onPress={showDatePicker}>
            <InputIcon color="$primaryNormal" as={CalendarMonth} size="lg" />
          </InputSlot>
        </Input>
        {error ? (
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>{error}</FormControlErrorText>
          </FormControlError>
        ) : null}
      </FormControl>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Box>
  );
};
