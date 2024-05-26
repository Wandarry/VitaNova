import { useField } from "formik";
import {
  TextInput as TextInputDumb,
  TextInputProps as TextInputDumbProps,
} from "./dumb/TextInput";

interface TextInputProps
  extends Omit<TextInputDumbProps, "value" | "onChange" | "error"> {
  name: string;
}

const TextInput = ({ name, ...props }: TextInputProps) => {
  const [{ value }, { error }, { setValue }] = useField<string>(name);
  return (
    <TextInputDumb error={error} value={value} onChange={setValue} {...props} />
  );
};

export default TextInput;
