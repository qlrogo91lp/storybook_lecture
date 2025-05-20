import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../components/PrimaryButton';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>),
  ],
  argTypes: {
    theme: {
      control: 'select',
      options: ['dark', 'light', 'social', 'text'],
      description: '버튼의 테마',
      defaultValue: 'dark',
    },
    children: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
      defaultValue: '버튼',
    },
    onClick: {
      action: 'buttonClicked',
      description: '버튼 클릭 이벤트 핸들러',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: 'dark',
    children: '버튼',
    onClick: () => alert('버튼 클릭됨'),
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    theme: 'light',
    children: '라이트 버튼',
    onClick: () => alert('라이트 버튼 클릭됨'),
    disabled: false,
  },
};

export const Social: Story = {
  args: {
    theme: 'social',
    children: '소셜 버튼',
    onClick: () => alert('소셜 버튼 클릭됨'),
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    theme: 'text',
    children: '텍스트 버튼',
    onClick: () => alert('텍스트 버튼 클릭됨'),
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    theme: 'dark',
    children: '비활성화된 버튼',
    onClick: () => alert('비활성화된 버튼 클릭됨'),
    disabled: true,
  },
};
