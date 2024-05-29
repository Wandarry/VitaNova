import { useField } from "formik";
import {
  CheckBox as CheckboxDumb,
  CheckboxProps as CheckboxDumbProps,
} from "./dumb/Checkbox";

interface CheckboxProps
  extends Omit<CheckboxDumbProps, "isChecked" | "onChange"> {
  name: string;
}

const Checkbox = ({ name, ...props }: CheckboxProps) => {
  const [{ value }, , { setValue }] = useField<boolean>(name);
  const handleChange = () => {
    setValue(!value);
  };

  return <CheckboxDumb isChecked={value} onChange={handleChange} {...props} />;
};

export default Checkbox;
