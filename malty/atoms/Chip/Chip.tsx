/* eslint-disable no-nested-ternary */
import { CloneIcon, IconColor, IconSize } from '@carlsberg/malty.atoms.base-icon';
import { Button, ButtonSize, ButtonStyle } from '@carlsberg/malty.atoms.button';
import { Text, TextColor, TextStyle } from '@carlsberg/malty.atoms.text';
import { Plus } from '@carlsberg/malty.icons.plus';
import { defaultTheme } from '@carlsberg/malty.theme.new-malty-theme-provider';
import React, { useEffect, useState } from 'react';
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
  const theme = defaultTheme;
  const [chipSize, setChipSize] = useState(theme.sizesV2.l);
  const [fontSize, setFontSize] = useState(TextStyle.MediumSmallBold);
  const [buttonSize, setButtonSize] = useState(ButtonSize.Medium);

  const handleClick = () => {
    onChange(!selected);
  };

  useEffect(() => {
    switch (size) {
      case ChipSize.XSmall: {
        setChipSize(theme.sizesV2.m);
        setFontSize(TextStyle.SmallBold);
        setButtonSize(ButtonSize.XSmall);
        break;
      }
      case ChipSize.Small: {
        setChipSize(theme.sizesV2.l);
        setFontSize(TextStyle.MediumSmallBold);
        setButtonSize(ButtonSize.Small);
        break;
      }

      default: {
        setChipSize(theme.sizesV2.xl);
        setFontSize(TextStyle.MediumSmallBold);
        setButtonSize(ButtonSize.Medium);
        break;
      }
    }
  }, [size, theme]);

  const getIconColor = () => {
    if (disabled) {
      return IconColor.DisableLight;
    }
    if (readOnly) {
      return selected ? IconColor.White : IconColor.Support80;
    }
    return IconColor.DigitalBlack;
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
              ? IconColor.DisableLight
              : selected
              ? IconColor.White
              : IconColor.DigitalBlack) as TextColor
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
