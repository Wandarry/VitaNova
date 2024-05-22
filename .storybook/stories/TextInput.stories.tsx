import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../../components/uikit/Input/TextInput';
//import { MailIcon } from '@gluestack-ui/themed';

const TextInputMeta: Meta<typeof TextInput> = {
    title: 'Uikit/Input/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Enter text...',
        //icon: MailIcon,
    },
  };

  export default TextInputMeta;

export const Basic: StoryObj<typeof TextInput> = {};
