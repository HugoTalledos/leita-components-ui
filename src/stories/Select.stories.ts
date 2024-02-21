import type { Meta, StoryObj } from '@storybook/react';

import Select from '../stories/Fields/SelectTemplate';

const meta: Meta<typeof Select> = {
  title: 'Formulario/Select',
  component: Select,
  tags: ['autodocs'],
  
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Opciones'
  },
};
