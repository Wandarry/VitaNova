import {
  CircleIcon,
  Radio,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@gluestack-ui/themed";

export type RadioButtonProps = {
  label: string;
  value: string;
  onChange?: () => void;
  isDisabled: boolean;
};

export const RadioButton = ({
  value,
  onChange,
  isDisabled,
  label,
}: RadioButtonProps) => {
  return (
    <Radio
      value={value}
      isDisabled={isDisabled}
      onChange={onChange}
      $disabled-opacity="$50"
    >
      <RadioIndicator mr="$3" borderColor="$primaryNormal">
        <RadioIcon as={CircleIcon} color="$primaryNormal" />
      </RadioIndicator>
      <RadioLabel fontSize="$lg" color="$black">
        {label}
      </RadioLabel>
    </Radio>
  );
};
