import type { Meta, StoryObj } from '@storybook/react';
import TagButton from '../components/TagButton';

const meta = {
  title: 'Buttons/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
		children: {
			control: 'text',
			description: 'TagButton의 내용',
		},
    isChecked: {
      control: 'boolean',
      description: 'TagButton의 체크 상태',
      defaultValue: false,
    },
    onClick: {
      action: 'buttonClicked',
      description: 'TagButton 클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'button',
    isChecked: true,
    onClick: () => alert('TagButton clicked'),
  },
};
