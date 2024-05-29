import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@gluestack-ui/themed";

export type CheckboxProps = {
  label: string;
  value: string;
  onChange: (value: boolean) => void;
  isChecked: boolean;
  isDisabled: boolean;
};

export const CheckBox = ({
  label,
  value,
  onChange,
  isChecked,
  isDisabled,
}: CheckboxProps) => {
  return (
    <Checkbox
      value={value}
      isChecked={isChecked}
      isDisabled={isDisabled}
      $disabled-opacity="$50"
      onChange={onChange}
    >
      <CheckboxIndicator borderColor="$primaryNormal">
        <CheckboxIcon as={CheckIcon} color="$white" bgColor="$primaryNormal" />
      </CheckboxIndicator>
      <CheckboxLabel
        color="$black"
        marginLeft="$3"
        fontSize="$md"
        fontWeight="$medium"
      >
        {label}
      </CheckboxLabel>
    </Checkbox>
  );
};
