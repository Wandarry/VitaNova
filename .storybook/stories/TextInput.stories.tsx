import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../components/uikit/Input/TextInput';
import { User } from '../../components/icons/user';

const TextInputMeta: Meta<typeof TextInput> = {
    title: 'Uikit/Input/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Enter text...',
        icon: User,
        error: "Error here"
    },
  };

  export default TextInputMeta;

export const Basic: StoryObj<typeof TextInput> = {};
