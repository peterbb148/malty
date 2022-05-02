import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import Calendar from '@carlsberggroup/malty.icons.calendar';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ReactNode, useContext } from 'react';
import DatePicker from 'react-datepicker';
import { ThemeContext } from 'styled-components';
import { StyledCalendar, StyledContainer, StyledDatepicker, StyledInputIcon, StyledWrapper } from './Datepicker.styled';
import { DatepickerProps } from './Datepicker.types';

export const Datepicker = ({
  startDate,
  endDate,
  onChange,
  label,
  locale,
  minDate,
  maxDate,
  disabled,
  excludeDates,
  selectsRange,
  inline,
  ...props
}: DatepickerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const Container = ({ children }: { children: ReactNode }) => (
    <StyledContainer theme={theme}>
      <StyledCalendar theme={theme}>{children}</StyledCalendar>
    </StyledContainer>
  );

  return (
    <TypographyProvider>
      <StyledWrapper theme={theme}>
        {!inline && <label htmlFor="datepicker-input">{label}</label>}
        <StyledDatepicker theme={theme}>
          {!inline && (
            <StyledInputIcon theme={theme}>
              <Calendar size={IconSize.Medium} color={IconColor.Primary} />
            </StyledInputIcon>
          )}

          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={selectsRange ? endDate : null}
            disabled={disabled}
            onChange={onChange}
            locale={locale}
            showPopperArrow={false}
            calendarClassName="calendar"
            calendarContainer={Container}
            disabledKeyboardNavigation
            calendarStartDay={1}
            useWeekdaysShort
            minDate={minDate}
            maxDate={maxDate}
            excludeDates={excludeDates}
            className="datepickerInput"
            inline={inline}
            selectsRange={selectsRange}
            shouldCloseOnSelect={!selectsRange}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          />
        </StyledDatepicker>
      </StyledWrapper>
    </TypographyProvider>
  );
};