import { useField } from "formik";
import { RadioGroup } from "@gluestack-ui/themed";

interface RadioButtonProps {
  name: string;
  flexDirection: "row" | "column";
  gap?: number;
  children: React.ReactNode;
}

const RadioButtonGroup = ({
  name,
  children,
  flexDirection,
  gap,
}: RadioButtonProps) => {
  const [{ value }, , { setValue }] = useField<string>(name);

  return (
    <RadioGroup
      value={value}
      onChange={setValue}
      flexDirection={flexDirection}
      gap={gap}
      justifyContent="space-between"
    >
      {children}
    </RadioGroup>
  );
};

export default RadioButtonGroup;
