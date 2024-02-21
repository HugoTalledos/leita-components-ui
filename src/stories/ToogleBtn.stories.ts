import type { Meta, StoryObj } from '@storybook/react';

import Button from '../stories/Buttons/ToggleBtnTemplate';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Forms/Buttons/Toogle button',
  component: Button,
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    active: false,
    label: 'Botones'
  },
};
