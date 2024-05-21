import type { Meta, StoryObj } from '@storybook/react';
import { SolidSmallWhite } from '../../components/uikit/Buttons/SolidSmallWhite';
import { View } from 'react-native';
import React from 'react';


const SolidSmallWhiteMeta: Meta<typeof SolidSmallWhite> = {
    title: 'Uikit/Buttons/SolidSmall',
    component: SolidSmallWhite,
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

  export default SolidSmallWhiteMeta;

export const Basic: StoryObj<typeof SolidSmallWhite> = {};
