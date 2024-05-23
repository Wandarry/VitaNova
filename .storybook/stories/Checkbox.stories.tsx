import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '../../components/uikit/Checkbox';

const CheckBoxMeta: Meta<typeof CheckBox> = {
  title: 'uikit/Input/CheckBox',
  component: CheckBox,
  args: {
    label: 'Hello world',
  },
};

export default CheckBoxMeta;

export const Basic: StoryObj<typeof CheckBox> = {};

