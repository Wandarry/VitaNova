import type { Meta, StoryObj } from '@storybook/react';
import { SolidSmall } from '../../components/uikit/Buttons/SolidSmall';
import { View } from 'react-native';
import React from 'react';


const SolidSmallMeta: Meta<typeof SolidSmall> = {
    title: 'Uikit/Buttons/SolidSmall',
    component: SolidSmall,
    args: {
        message: 'Suivant',
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

  export default SolidSmallMeta;

export const Basic: StoryObj<typeof SolidSmall> = {};
