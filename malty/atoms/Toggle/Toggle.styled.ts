import styled, { css } from 'styled-components';

export const StyledError = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
`;

export const StyledLabelWrapper = styled.label`
  align-items: center;
  display: inline-block;
  display: flex;
  // using hardcoded values due to not having token value and design team thinking on implementation with icons
  height: 14px;
  position: relative;
  width: auto;
`;
export const StyledToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.sizes.m.value};
  // using hardcoded values due to not having token value and design team thinking on implementation with icons
  height: 14px;
`;
export const StyledLabel = styled.label<{
  disabled?: boolean;
}>`
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  margin-left: ${({ theme }) => theme.sizes['2xs'].value};
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
`;
export const StyledInput = styled.input<{
  disabled?: boolean;
}>`
  display: none;
  &:checked + .switch::before {
    transform: translateX(14px);
    background-color: ${({ theme }) => theme.colors.colours.default.white.value};
    border: none;
    top: 1px;
  }
  &:checked + .switch {
    background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    &:hover {
      ${({ theme }) =>
        theme &&
        css`
          background-color: ${theme.colors.colours.overlay['digital-black'][75].value};
          border: ${theme.borders['border-2px--solid']['border-width'].value}
            ${theme.borders['border-2px--solid']['border-style'].value} transparent;
        `}
    }
  }
  ${({ disabled, theme }) =>
    disabled &&
    css`
      &:checked + .switch {
        background-color: ${theme.colors.colours.system['disable-light-theme'].value};
        pointer-events: none;
        border: ${theme.borders['border-2px--solid']['border-width'].value}
          ${theme.borders['border-2px--solid']['border-style'].value} transparent;
      }
    `}
`;

export const StyledSwitch = styled.span<{
  disabled?: boolean;
}>`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  border-radius: ${({ theme }) => theme.sizes.m.value};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
  ${({ theme }) =>
    theme &&
    css`
      border: ${theme.borders['border-2px--solid']['border-width'].value}
        ${theme.borders['border-2px--solid']['border-style'].value}
        ${theme.colors.colours.default['digital-black'].value};
      &:hover {
        border: ${theme.borders['border-2px--solid']['border-width'].value}
          ${theme.borders['border-2px--solid']['border-style'].value}
          ${theme.colors.colours.overlay['digital-black'][75].value};
        &:before {
          border: ${theme.borders['border-2px--solid']['border-width'].value}
            ${theme.borders['border-2px--solid']['border-style'].value}
            ${theme.colors.colours.overlay['digital-black'][75].value};
        }
      }
    `}

  &:before {
    position: absolute;
    content: '';
    left: -2px;
    top: -1px;
    width: ${({ theme }) => theme.sizes['2xs'].value};
    height: ${({ theme }) => theme.sizes['2xs'].value};
    background-color: ${({ theme }) => theme.colors.colours.default.white.value};

    border-radius: 50%;
    transition: transform 0.3s ease;
    ${({ theme }) =>
      theme &&
      css`
        border: ${theme.borders['border-2px--solid']['border-width'].value}
          ${theme.borders['border-2px--solid']['border-style'].value}
          ${theme.colors.colours.default['digital-black'].value};
      `}
  }
  ${({ disabled, theme }) =>
    disabled &&
    css`
      &:before {
        border: ${theme.borders['border-2px--solid']['border-width'].value}
          ${theme.borders['border-2px--solid']['border-style'].value}
          ${theme.colors.colours.system['disable-light-theme'].value};
        pointer-events: none;
      }
      pointer-events: none;
      border: ${theme.borders['border-2px--solid']['border-width'].value}
        ${theme.borders['border-2px--solid']['border-style'].value}
        ${theme.colors.colours.system['disable-light-theme'].value};
    `}
`;