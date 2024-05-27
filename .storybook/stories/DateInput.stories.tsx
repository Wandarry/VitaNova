import type { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "../../components/uikit/Input/dumb/DateInputDumb";
import { useState } from "react";
import React from "react";

const DateInputMeta: Meta<typeof DateInput> = {
  title: "Uikit/Input/DateInput",
  component: DateInput,
  args: {
    error: "Error",
  },
};

export default DateInputMeta;

export const Basic: StoryObj<typeof DateInput> = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>();

    return (
      <DateInput
        value={date}
        onChange={(date) => {
          setDate(date);
        }}
      />
    );
  },
};
