import { useField } from "formik";
import {
  RadioButton as RadioButtonDumb,
  RadioButtonProps as RadioButtonDumbProps,
} from "./dumb/RadioButton";

interface RadioButtonProps
  extends Omit<RadioButtonDumbProps, "isChecked" | "onChange"> {
  name: string;
  value: string;
}

const RadioButton = ({ name, value, ...props }: RadioButtonProps) => {
  const [{ value: fieldValue }, , { setValue }] = useField(name);

  const handleChange = () => {
    setValue(value);
  };

  return <RadioButtonDumb value={value} onChange={handleChange} {...props} />;
};

export default RadioButton;
