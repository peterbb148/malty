import { space } from '@carlsberg/malty.utils.space';
import styled, { css, keyframes } from 'styled-components';
import { ChipSize, StyledChipProps } from './Chip.types';

const fadeIn = keyframes`
    0% {opacity: 0;}
    
    100% {opacity: 1;}
`;

export const StyledChip = styled.div<StyledChipProps>`
  transition: background-color 0.3s ease-in-out !important;
  animation-name: ${fadeIn};
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${({ height }) => height};
  width: fit-content;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colorsV2.support[100] : theme.colorsV2.support[20]};
  padding: 0
    ${({ size, theme }) => {
      if (size === ChipSize.XSmall) {
        return theme.sizesV2['2xs'];
      }
      if (size === ChipSize.Small) {
        return theme.sizesV2.xs;
      }
      return theme.sizesV2.s;
    }};
  ${({ disabled, selected }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colorsV2.system['disable-light-theme']};
      opacity: ${selected ? 1 : 0.75};
    `};
  ${({ readOnly, selected }) =>
    readOnly &&
    !selected &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colorsV2.support[20]};
    `};
  ${({ readOnly, selected }) =>
    readOnly &&
    selected &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colorsV2.support[80]};
    `};
  ${({ hasButton }) =>
    hasButton &&
    css`
      padding-right: 0;
    `};
  button {
    svg {
      transition: all 0.3s ease-in-out !important;
      ${({ selected }) =>
        selected &&
        css`
          transition: all 0.3s ease-in-out !important;
          transform: rotate(-45deg);
        `};
    }
  }

  ${space}
`;
export const StyledTextContainer = styled.div<{
  size?: ChipSize;
  hasIcon?: boolean;
  hasButton?: boolean;
}>`
  padding-left: ${({ size, theme, hasIcon, hasButton }) => {
    if (hasIcon && !hasButton && size === ChipSize.XSmall) {
      return theme.sizesV2['4xs'];
    }
    return hasIcon && !hasButton && theme.sizesV2['2xs'];
  }};
  padding-right: ${({ hasButton, theme, size }) => {
    if (hasButton && size === ChipSize.XSmall) {
      return theme.sizesV2['2xs'];
    }
    if (hasButton && size === ChipSize.Small) {
      return theme.sizesV2.xs;
    }
    return hasButton && theme.sizesV2.s;
  }};
  p {
    transition: color 0.3s ease-in-out !important;
    animation-name: ${fadeIn};
  }
`;
