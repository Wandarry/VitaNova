import type { Meta, StoryObj } from '@storybook/react';
import { SolidLong } from '../../components/uikit/Buttons/SolidLong';
import { View } from 'react-native';
import React from 'react';


const SolidLongMeta: Meta<typeof SolidLong> = {
    title: 'Uikit/Buttons/SolidLong',
    component: SolidLong,
    args: {
        message: 'Me connecter',
        isDisabled: false,
        isLoading: false,
    },
    decorators: [
        (Story) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Story />
          </View>
        ),
      ],
  };

  export default SolidLongMeta;

export const Basic: StoryObj<typeof SolidLong> = {};