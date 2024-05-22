import type { Meta, StoryObj } from '@storybook/react';
import { FeatureButton } from '../../components/uikit/Buttons/FeatureButton';
import { Approval } from '../../components/icons/approval'

const FeatureButtonMeta: Meta<typeof FeatureButton> = {
    title: 'Uikit/Buttons/FeatureButton',
    component: FeatureButton,
    args: {
        icon: Approval,
        isDisabled: false,
    },
  };

  export default FeatureButtonMeta;

export const Basic: StoryObj<typeof FeatureButton> = {};
