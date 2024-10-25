/* eslint-disable no-nested-ternary */
import { CloneIcon, IconColor, IconSize } from '@carlsberg/malty.atoms.base-icon';
import { Button, ButtonSize, ButtonStyle } from '@carlsberg/malty.atoms.button';
import { Text, TextColor, TextStyle } from '@carlsberg/malty.atoms.text';
import { Plus } from '@carlsberg/malty.icons.plus';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledChip, StyledTextContainer } from './Chip.styled';
import { ChipProps, ChipSize } from './Chip.types';

export const Chip = ({
  label,
  size = ChipSize.Medium,
  selected = false,
  onChange = () => null,
  icon,
  showAction = false,
  dataTestId,
  disabled = false,
  readOnly = false,
  ...props
}: ChipProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [chipSize, setChipSize] = useState(theme.sizesV2.l.value);
  const [fontSize, setFontSize] = useState(TextStyle.MediumSmallBold);
  const [buttonSize, setButtonSize] = useState(ButtonSize.Medium);

  const handleClick = () => {
    onChange(!selected);
  };

  useEffect(() => {
    switch (size) {
      case ChipSize.XSmall: {
        setChipSize(theme.sizesV2.m.value);
        setFontSize(TextStyle.SmallBold);
        setButtonSize(ButtonSize.XSmall);
        break;
      }
      case ChipSize.Small: {
        setChipSize(theme.sizesV2.l.value);
        setFontSize(TextStyle.MediumSmallBold);
        setButtonSize(ButtonSize.Small);
        break;
      }

      default: {
        setChipSize(theme.sizesV2.xl.value);
        setFontSize(TextStyle.MediumSmallBold);
        setButtonSize(ButtonSize.Medium);
        break;
      }
    }
  }, [size, theme]);

  const getIconColor = () => {
    if (disabled) {
      return theme.colorsV2.system['disable-light-theme'].value;
    }
    if (readOnly) {
      return selected ? theme.colorsV2.default.white.value : theme.colorsV2.support[80].value;
    }
    return theme.colorsV2.default['digital-black'].value;
  };

  return (
    <StyledChip
      hasButton={showAction}
      disabled={disabled}
      readOnly={readOnly}
      data-testid={dataTestId}
      onClick={!disabled ? handleClick : undefined}
      selected={selected}
      height={chipSize}
      size={size}
      theme={theme}
      {...props}
    >
      {!showAction && (
        <CloneIcon
          icon={icon}
          dataTestId={`${dataTestId}-icon`}
          color={getIconColor()}
          size={size === ChipSize.XSmall ? IconSize.Small : IconSize.MediumSmall}
        />
      )}
      <StyledTextContainer
        hasButton={showAction}
        hasIcon={!!icon}
        size={size}
        data-testid={`${dataTestId}-label`}
        theme={theme}
      >
        <Text
          textStyle={fontSize}
          color={
            (readOnly && selected
              ? TextColor.White
              : readOnly && !selected
              ? TextColor.Support80
              : disabled
              ? theme.colorsV2.system['disable-light-theme'].value
              : selected
              ? theme.colorsV2.default.white.value
              : theme.colorsV2.default['digital-black'].value) as TextColor
          }
        >
          {label}
        </Text>
      </StyledTextContainer>
      {showAction && (
        <Button
          disabled={disabled || readOnly}
          negative={selected && !disabled}
          dataTestId={`${dataTestId}-button`}
          size={buttonSize}
          style={ButtonStyle.Transparent}
          icon={<Plus dataTestId="plus-icon" />}
        />
      )}
    </StyledChip>
  );
};
