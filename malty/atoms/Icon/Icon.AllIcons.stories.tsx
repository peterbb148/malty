import { StyledIcon } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Icon as IconComponent } from './Icon';
import { Colors, IconInterface, NamesTypes, SizesTypes } from './Icon.types';

const StyledAllIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${StyledIcon} {
    margin: 10px;
  }
`;

export default {
  title: 'Atoms/Icons/All Icons',
  component: IconComponent,
  parameters: {
    importObject: 'Icon',
    importPath: '@carlsberggroup/malty.atoms.icon'
  },
  argTypes: {
    name: {
      options: Object.values(NamesTypes),
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      defaultValue: NamesTypes.AddContent,
      control: {
        disable: true
      }
    },
    color: {
      options: Object.values(Colors),
      description: 'Icon color, options are',
      defaultValue: Colors.Primary,
      table: {
        defaultValue: {
          summary: 'Primary'
        }
      },
      control: {
        type: 'radio'
      }
    },
    size: {
      options: Object.values(SizesTypes),
      defaultValue: SizesTypes.Medium,
      description: 'Icon size, options are',
      table: {
        defaultValue: {
          summary: 'medium'
        }
      },
      control: {
        type: 'radio'
      }
    },
    viewBox: {
      table: {
        disable: true
      }
    },
    onClick: {
      description: 'Function to run when icon is clicked.'
    }
  }
} as Meta;

const Template: Story<IconInterface> = (args) => (
  <StyledAllIconsWrapper>
    {Object.values(NamesTypes).map((name, index) => (
      <div title={name} key={index}>
        <IconComponent {...args} name={name} />
      </div>
    ))}
  </StyledAllIconsWrapper>
);

export const AllIcons = Template.bind({});
AllIcons.parameters = {
  color: Colors.Primary,
  size: SizesTypes.Medium,
  name: NamesTypes.AddContent
};