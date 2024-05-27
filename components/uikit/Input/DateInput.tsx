import { useField } from "formik";
import {
  DateInput as DateInputDumb,
  DateInputProps as DateInputDumbProps,
} from "./dumb/DateInputDumb";

interface DateInputProps
  extends Omit<DateInputDumbProps, "value" | "onChange" | "error"> {
  name: string;
}

const DateInput = ({ name, ...props }: DateInputProps) => {
  const [{ value }, { error }, { setValue }] = useField<Date>(name);

  return (
    <DateInputDumb error={error} value={value} onChange={setValue} {...props} />
  );
};

export default DateInput;
