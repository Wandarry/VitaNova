import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { NewsTag } from '../../components/uikit/NewsTag';
import React from 'react';

const NewsTagMeta: Meta<typeof NewsTag> = {
  title: 'uikit/NewsTag',
  component: NewsTag,
  args: {
    title: 'Hello world',
    style: "card"
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1,}}>
        <Story />
      </View>
    ),
  ],
};

export default NewsTagMeta;

export const Basic: StoryObj<typeof NewsTag> = {};

