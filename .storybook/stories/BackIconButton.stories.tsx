import type { Meta, StoryObj } from '@storybook/react';
import { BackIconButton } from '../../components/uikit/Buttons/BackIconButton';

const BackIconButtonMeta: Meta<typeof BackIconButton> = {
    title: 'Uikit/Buttons/BackIconButton',
    component: BackIconButton,
    args: {
        isDisabled: false,
    },
  };

  export default BackIconButtonMeta;

export const Basic: StoryObj<typeof BackIconButton> = {};