import { Pressable, Text } from "@gluestack-ui/themed";
import { useField } from "formik";

type BloodTypeRadioButtonProps = {
  label: string;
  value: string;
  name: string;
};

export const BloodTypeRadioButton = ({
  label,
  value,
  name,
}: BloodTypeRadioButtonProps) => {
  const [field, , { setValue }] = useField({ name });

  const handleChange = () => {
    setValue(value);
  };

  const isSelected = field.value === value;

  return (
    <Pressable
      onPress={handleChange}
      bgColor={isSelected ? "$primaryNormal" : "$white"}
      borderWidth={2}
      borderRadius={8}
      borderColor="$primaryNormal"
      h={58}
      w={58}
      justifyContent="center"
      alignItems="center"
    >
      <Text
        color={isSelected ? "$white" : "$primaryNormal"}
        fontWeight="$bold"
        fontSize={18}
      >
        {label}
      </Text>
    </Pressable>
  );
};
