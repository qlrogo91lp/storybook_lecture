import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from '../components/IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconPath: {
      control: 'text',
      description: 'IconButton의 아이콘 경로',
      defaultValue: 'icon',
    },
    alt: {
      control: 'text',
      description: 'IconButton의 아이콘 대체 텍스트',
      defaultValue: '',
    },
    onClick: {
      action: 'clicked',
      description: 'IconButton 클릭 이벤트 핸들러',
    },
  },
  args: {
    onClick: fn(),
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: 'icon',
    alt: 'icon',
  },
};
