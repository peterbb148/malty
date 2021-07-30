import { StyledIcon } from '@carlsberggroup/malty.atoms.icon';
import styled, { css } from 'styled-components';
import { IconPosition } from './Button.types';

const StyledButton = styled.button<{
  hasText: boolean;
  hasIcon: boolean;
  isWhite?: boolean;
  fullWidth?: boolean;
  sizing: number;
  iconPos: IconPosition;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ sizing }) => `0 ${sizing}px`};
  height: ${({ sizing }) => `${sizing}px`};
  font-size: 14px;
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.fontFamily.text};
  border: none;
  gap: 16px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${({ iconPos }) => (IconPosition[iconPos] === IconPosition.Right ? 'row' : 'row-reverse')};
  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.white.value};
    background-color: ${({ theme }) => theme.color.button.primaryDisable.value};
    &:hover {
      color: ${({ theme }) => theme.color.white.value};
      background-color: ${({ theme }) => theme.color.button.primaryDisable.value};
    }
  }

  svg {
    height: 24px;
    width: 24px;
  }

  ${({ hasText, hasIcon, sizing }) =>
    !hasText &&
    hasIcon &&
    css`
      padding: 0;
      justify-content: center;
      width: ${sizing}px;
    `};

  ${({ hasText, hasIcon }) =>
    hasText &&
    hasIcon &&
    css`
      ${StyledIcon} {
        margin-left: 16px;
      }
    `};
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.color.button.primaryNegativeDefault.value : theme.color.button.primaryDefault.value};
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.white.value)};
  border: 1px solid
    ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.transparent.value)};
  &:hover {
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeHover.value : theme.color.button.primaryHover.value};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.color.transparent.value};
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value)};
  border: 1px solid
    ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeDefault.value : theme.color.button.primaryDefault.value};
  &:hover {
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeHover.value : theme.color.button.primaryHover.value};
  }
`;

export const StyledFloaterButton = styled(StyledButton)`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value};
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.white.value)};
  border: 1px solid
    ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.transparent.value)};
  border-radius: ${({ sizing }) => `${sizing / 2}px`};
  position: absolute;
  z-index: 100;
  &:hover {
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeHover.value : theme.color.button.primaryHover.value};
  }
`;

export const StyledLinkButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value)};
  text-decoration: underline;
  padding: 0;
  height: auto;
  &:hover {
    background-color: ${({ theme }) => theme.color.transparent.value};
  }
`;
