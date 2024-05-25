import type { Meta, StoryObj } from '@storybook/react';
import { NextIconButton } from '../../components/uikit/Buttons/NextIconButton';

const NextIconButtonMeta: Meta<typeof NextIconButton> = {
    title: 'Uikit/Buttons/NextIconButton',
    component: NextIconButton,
    args: {
        isDisabled: false,
    },
  };

  export default NextIconButtonMeta;

export const Basic: StoryObj<typeof NextIconButton> = {};