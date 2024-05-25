import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from '../../components/uikit/Buttons/LinkButton';

const LinkButtonMeta: Meta<typeof LinkButton> = {
    title: 'Uikit/Buttons/LinkButton',
    component: LinkButton,
    args: {
        isDisabled: false,
        title: "Tout voir",
        withIcon: true,
    },
  };

  export default LinkButtonMeta;

export const Basic: StoryObj<typeof LinkButton> = {};
