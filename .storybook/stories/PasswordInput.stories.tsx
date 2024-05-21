import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../../components/uikit/Input/PasswordInput';


const PasswordInputMeta: Meta<typeof PasswordInput> = {
    title: 'Uikit/Input/PasswordInput',
    component: PasswordInput,
    args: {
        isRequired: true,
    },
  };

  export default PasswordInputMeta;

export const Basic: StoryObj<typeof PasswordInput> = {};
