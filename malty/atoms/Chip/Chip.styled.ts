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
  height: ${({ theme, size }) => theme.sizesV2[size].value};
  width: fit-content;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colorsV2.support[100].value : theme.colorsV2.support[20].value};
  padding: 0
    ${({ size, theme }) => {
      if (size === ChipSize.XSmall) {
        return theme.sizesV2['2xs'].value;
      }
      if (size === ChipSize.Small) {
        return theme.sizesV2.xs.value;
      }
      return theme.sizesV2.s.value;
    }};
  ${({ disabled, selected }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colorsV2.system['disable-light-theme'].value};
      opacity: ${selected ? 1 : 0.75};
    `};
  ${({ readOnly, selected }) =>
    readOnly &&
    !selected &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colorsV2.support[20].value};
    `};
  ${({ readOnly, selected }) =>
    readOnly &&
    selected &&
    css`
      pointer-events: none;
      cursor: default;
      background-color: ${({ theme }) => theme.colorsV2.support[80].value};
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
      return theme.sizesV2['4xs'].value;
    }
    return hasIcon && !hasButton && theme.sizesV2['2xs'].value;
  }};
  padding-right: ${({ hasButton, theme, size }) => {
    if (hasButton && size === ChipSize.XSmall) {
      return theme.sizesV2['2xs'].value;
    }
    if (hasButton && size === ChipSize.Small) {
      return theme.sizesV2.xs.value;
    }
    return hasButton && theme.sizesV2.s.value;
  }};
  p {
    transition: color 0.3s ease-in-out !important;
    animation-name: ${fadeIn};
  }
`;
