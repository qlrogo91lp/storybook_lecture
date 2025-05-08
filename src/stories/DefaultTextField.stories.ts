import type { Meta, StoryObj } from '@storybook/react';
import DefaultTextField from '../components/DefaultTextField';

const meta = {
  title: 'TextFields/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'changed',
      description: 'DefaultTextField의 값이 변경될 때 호출되는 이벤트 핸들러',
    },
   iconAlt: {
      control: 'text',
      description: 'DefaultTextField의 아이콘 대체 텍스트',
    },
    value: {
      control: 'text',
      description: 'DefaultTextField의 현재 값',
    },
    iconPath: {
      control: 'text',
      description: 'DefaultTextField의 아이콘 경로',
    },
    placeholder: {
      control: 'text',
      description: 'DefaultTextField의 플레이스홀더 텍스트',
      defaultValue: '텍스트를 입력해주세요.',
    },
    errorMessage: {
      control: 'text',
      description: 'DefaultTextField의 에러 메시지',
      defaultValue: '에러메세지는 여기로',
    },
    onIconClick: {
      action: 'iconClicked',
      description: 'DefaultTextField의 아이콘 클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: 'icon',
    iconAlt: 'icon',
    placeholder: '텍스트를 입력해주세요.',
    value: '',
    errorMessage: '에러메세지는 여기로',
    onChange: () => {},
    onIconClick: () => {},
  },
};
