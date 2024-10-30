/* eslint-disable no-nested-ternary */
import { space } from '@carlsberg/malty.utils.space';
import styled, { css, keyframes } from 'styled-components';
import { ButtonColor, ButtonIconPosition, ButtonSize, StyledButtonProps } from './Button.types';

const animateShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
`;

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  border: none;
  gap: ${({ theme }) => theme.sizesV2.s};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${({ iconPos }) =>
    ButtonIconPosition[iconPos] === ButtonIconPosition.Right ? 'row' : 'row-reverse'};

  ${({ theme, size, hasText }) => {
    switch (size) {
      case ButtonSize.XSmall: {
        return css`
          font-family: ${theme.typographyV2.montserrat.body[14].bold.fontFamily};
          font-size: ${theme.typographyV2.montserrat.body[14].bold.fontSize};
          height: ${theme.sizesV2.m};
          max-width: ${!hasText && theme.sizesV2.m};
          padding: 0 ${hasText ? theme.sizesV2['2xs'] : theme.sizesV2['4xs']};

          svg {
            height: ${theme.sizesV2.s};
            width: ${theme.sizesV2.s};
          }
        `;
      }
      case ButtonSize.Small: {
        return css`
          font-family: ${theme.typographyV2.montserrat.body[14].bold.fontFamily};
          font-size: ${theme.typographyV2.montserrat.body[14].bold.fontSize};
          height: ${theme.sizesV2.l};
          max-width: ${!hasText && theme.sizesV2.l};
          padding: 0 ${hasText ? theme.sizesV2.xs : theme.sizesV2['3xs']};

          svg {
            height: ${theme.sizesV2.ms};
            width: ${theme.sizesV2.ms};
          }
        `;
      }
      case ButtonSize.Large: {
        return css`
          font-family: ${theme.typographyV2.montserrat.body[14].bold.fontFamily};
          font-size: ${theme.typographyV2.montserrat.body[14].bold.fontSize};
          height: ${theme.sizesV2['2xl']};
          max-width: ${!hasText && theme.sizesV2['2xl']};
          padding: 0 ${hasText ? `${theme.sizesV2.s}` : `${theme.sizesV2.xs}`};

          svg {
            height: ${theme.sizesV2.m};
            width: ${theme.sizesV2.m};
          }
        `;
      }
      case ButtonSize.XLarge: {
        return css`
          font-family: ${theme.typographyV2.montserrat.body[14].bold.fontFamily};
          font-size: ${theme.typographyV2.montserrat.body[14].bold.fontSize};
          height: ${theme.sizesV2['3xl']};
          max-width: ${!hasText && theme.sizesV2['3xl']};
          padding: 0 ${theme.sizesV2.s};

          svg {
            height: ${theme.sizesV2.m};
            width: ${theme.sizesV2.m};
          }
        `;
      }
      default: {
        return css`
          font-family: ${theme.typographyV2.montserrat.body[14].bold.fontFamily};
          font-size: ${theme.typographyV2.montserrat.body[14].bold.fontSize};
          height: ${theme.sizesV2.xl};
          max-width: ${!hasText && theme.sizesV2.xl};
          padding: 0 ${hasText ? `${theme.sizesV2.s}` : `${theme.sizesV2['2xs']}`};

          svg {
            height: ${theme.sizesV2.m};
            width: ${theme.sizesV2.m};
          }
        `;
      }
    }
  }}

  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
    background-color: ${({ theme }) => theme.colorsV2.default.neutral[200]};
  }

  .text-container {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.sizesV2['2xs']};
    opacity: 1;
    font: inherit;
    &.invisible {
      opacity: 0;
    }
  }

  .secondary-container {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animateShow} 0.25s linear;
    > div {
      gap: 0;
      padding: 0;
    }
  }

  ${({ hasText, hasIcon, isLoading }) =>
    ((!hasText && !hasIcon) || isLoading) &&
    css`
      .text-container {
        visibility: hidden;
      }
      .secondary-container {
        position: absolute;
      }
    `};

  ${space}
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ isNegative, theme, color }) =>
    isNegative
      ? theme.colorsV2.default.neutral[50]
      : color === ButtonColor.DigitalBlack
      ? theme.colorsV2.default.neutral[900]
      : theme.colors.theme[color]};
  color: ${({ isNegative, theme, color }) =>
    isNegative
      ? color === ButtonColor.DigitalBlack
        ? theme.colorsV2.default.neutral[900]
        : theme.colors.theme[color]
      : theme.colorsV2.default.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colorsV2.default.neutral[50]};

  &:hover {
    filter: brightness(${({ isNegative }) => (isNegative ? '95%' : '140%')});
    > div:first-child {
      filter: brightness(70%);
    }
  }

  &:active {
    filter: brightness(${({ isNegative }) => (isNegative ? '90%' : '170%')});
    > div:first-child {
      filter: brightness(60%);
    }
  }

  &:disabled {
    ${({ isNegative, theme }) =>
      isNegative &&
      css`
        background-color: ${theme.colorsV2.default.neutral[200]};
        color: ${theme.colorsV2.default.neutral[200]};
        &:hover {
          background-color: ${theme.colorsV2.default.neutral[200]};
          color: ${theme.colorsV2.default.neutral[200]};
        }
        svg {
          fill: ${theme.colorsV2.default.neutral[200]};
          color: ${theme.colorsV2.default.neutral[200]};
        }
      `};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      opacity: 0.75;
    `};
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
  color: ${({ isNegative, theme, color }) =>
    isNegative
      ? theme.colorsV2.default.neutral[50]
      : color === ButtonColor.DigitalBlack
      ? theme.colorsV2.default.neutral[900]
      : theme.colors.theme[color]};
  border: 1px solid
    ${({ isNegative, theme, color }) =>
      isNegative
        ? theme.colorsV2.default.neutral[50]
        : color === ButtonColor.DigitalBlack
        ? theme.colorsV2.default.neutral[900]
        : theme.colors.theme[color]};
  &:hover {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colorsV2.default.neutral[50]
        : theme.colorsV2.default.neutral[50]};
  }
  &:active {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colorsV2.default.neutral[50]
        : theme.colorsV2.default.neutral[50]};
  }
  &:disabled {
    svg {
      fill: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colorsV2.default.neutral[200]
          : theme.colorsV2.default.neutral[200]};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colorsV2.default.neutral[200]
          : theme.colorsV2.default.neutral[200]};
    }
    background-color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
    border: 1px solid
      ${({ isNegative, theme }) =>
        isNegative
          ? theme.colorsV2.default.neutral[200]
          : theme.colorsV2.default.neutral[200]};
    color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colorsV2.default.neutral[200]
        : theme.colorsV2.default.neutral[200]};
    &:hover {
      background-color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
      border: 1px solid
        ${({ isNegative, theme }) =>
          isNegative
            ? theme.colorsV2.default.neutral[200]
            : theme.colorsV2.default.neutral[200]};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colorsV2.default.neutral[200]
          : theme.colorsV2.default.neutral[200]};
    }
  }

  ${({ $selected, isNegative, theme }) =>
    $selected &&
    css`
      background-color: ${isNegative
        ? theme.colorsV2.default.neutral[50]
        : theme.colorsV2.default.neutral[50]};
    `}
`;

export const StyledTransparentButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colorsV2.default.neutral[50]};

  color: ${({ isNegative, theme, color }) =>
    isNegative
      ? theme.colorsV2.default.neutral[50]
      : color === ButtonColor.DigitalBlack
      ? theme.colorsV2.default.neutral[900]
      : theme.colors.theme[color]};
  &.active {
    background-color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
  }
  &:hover {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colorsV2.default.neutral[50]
        : theme.colorsV2.default.neutral[50]};
  }
  &:active {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colorsV2.default.neutral[50]
        : theme.colorsV2.default.neutral[50]};
  }
  &:disabled {
    svg {
      fill: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colorsV2.default.neutral[200]
          : theme.colorsV2.default.neutral[200]};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colorsV2.default.neutral[200]
          : theme.colorsV2.default.neutral[200]};
    }
    background-color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
    color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colorsV2.default.neutral[200]
        : theme.colorsV2.default.neutral[200]};
    &:hover {
      background-color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colorsV2.default.neutral[200]
          : theme.colorsV2.default.neutral[200]};
    }
  }

  ${({ $selected, isNegative, theme }) =>
    $selected &&
    css`
      background-color: ${isNegative
        ? theme.colorsV2.default.neutral[50]
        : theme.colorsV2.default.neutral[50]};
    `}
`;
