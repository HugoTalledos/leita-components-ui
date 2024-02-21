import type { Meta, StoryObj } from '@storybook/react';

import Button from '../stories/Buttons/ButtonTemplate';

const meta: Meta<typeof Button> = {
  title: 'Forms/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Button',
  },
};
