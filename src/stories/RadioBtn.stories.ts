import type { Meta, StoryObj } from '@storybook/react';

import Button from '../stories/Buttons/RadioBtnTemplate';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Forms/Buttons/Radio button',
  component: Button,
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
