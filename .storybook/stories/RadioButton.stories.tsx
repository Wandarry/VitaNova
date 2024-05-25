import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../../components/uikit/RadioButton';
import React from 'react';

const RadioButtonMeta: Meta<typeof RadioButton> = {
  title: 'Uikit/Input/RadioButton',
  component: RadioButton,
  args: {
    label: "Tous les organes et tissus nécessaires",
    isDisabled: false,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default RadioButtonMeta;

export const Basic: StoryObj<typeof RadioButton> = {};

