import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pill } from './Pill';
import { PillProps, PillSize, PillType } from './Pill.types';

const meta: Meta<PillProps> = {
  component: Pill,
  title: 'Information/Pill',
  parameters: {
    importObject: 'Pill',
    importPath: '@carlsberggroup/malty.atoms.pill'
  },
  render: (args) => <Pill {...args} />,
  argTypes: {
    text: {
      control: 'text',
      description: 'Pill content text'
    },
    size: {
      description: 'Pill size, options below',
      options: Object.values(PillSize),
      control: 'select'
    },
    type: {
      description: 'Pill type',
      options: Object.keys(PillType),
      mapping: PillType,
      control: 'select'
    },
    icon: {
      description: 'Icon to be displayed',
      options: Object.keys({ undefined, ...IconName }),
      mapping: { undefined, ...IconName },
      control: 'select'
    },
    badgeMode: {
      description: 'Decreases paddings and allows for a circled look as much as possible',
      control: 'boolean'
    },
    isUppercase: {
      description: 'Use this property to uppercase the text content',
      control: 'boolean'
    },
    dataTestId: {
      control: 'text',
      description: 'Pill data-testid'
    }
  }
};

type Story = StoryObj<PillProps>;

export const Base: Story = {
  args: {
    text: 'Text',
    icon: IconName.CarlsbergFilled,
    type: PillType.Primary,
    size: PillSize.Medium,
    badgeMode: false,
    isUppercase: false
  }
};

export const Icon: Story = {
  args: {
    ...Base.args,
    type: PillType.Success,
    text: ''
  }
};

export const Text: Story = {
  args: {
    ...Base.args,
    type: PillType.Fail,
    icon: undefined
  }
};

export const Badge: Story = {
  args: {
    ...Base.args,
    type: PillType.Success,
    size: PillSize.ExtraSmall,
    icon: undefined,
    text: '9',
    badgeMode: true
  }
};

export default meta;
