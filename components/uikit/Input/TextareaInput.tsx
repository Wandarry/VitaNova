import { useField } from "formik";
import {
  TextAreaInput as TextAreaInputDumb,
  TextareaInputProps as TextareaInputDumbProps,
} from "./dumb/TextareaInput";

interface TextareaInputProps
  extends Omit<TextareaInputDumbProps, "value" | "onChange" | "error"> {
  name: string;
}

const TextareaInput = ({ name, ...props }: TextareaInputProps) => {
  const [{ value }, { error }, { setValue }] = useField<string>(name);
  return (
    <TextAreaInputDumb
      error={error}
      value={value}
      onChange={setValue}
      {...props}
    />
  );
};

export default TextareaInput;
