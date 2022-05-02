import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  & label {
    font-size: ${({ theme }) => theme.typography.desktop.text.small_bold['font-size'].value};
    font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
    display: block;
    margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

export const StyledDatepicker = styled.div`
  position: relative;
  & .react-datepicker-popper {
    width: 100%;
    max-width: 544px;
    min-width: 304px;
  }
  & .datepickerInput {
    position: relative;
    padding: 0;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    height: ${({ theme }) => theme.sizes['2xl'].value};
    width: 100%;
    min-width: 150px;
    box-sizing: border-box;
    text-align: left;
    padding: 0 ${({ theme }) => theme.sizes.s.value};
    border-width: ${({ theme }) => `${theme.borders['border-1px--solid']['border-width'].value}`};
    border-style: ${({ theme }) => `${theme.borders['border-1px--solid']['border-style'].value}`};
    border-color: ${({ theme }) => `${theme.colors.colours.default['digital-black'].value}`};
    font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-size'].value};
    outline: none;
    &:disabled {
      cursor: 'default';
      border-color: ${({ theme }) => `${theme.colors.colours.support[40].value}`};
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
      color: ${({ theme }) => `${theme.colors.colours.support[60].value}`};
    }
    &::placeholder {
      color: ${({ theme }) => `${theme.colors.colours.support[60].value}`};
    }
  }
`;

export const StyledInputIcon = styled.span`
  display: inline-block;
  transform: translateY(-50%);
  top: 50%;
  right: 14px;
  position: absolute;
  z-index: 1;
  ${({ theme }) => theme.sizes.xs.value};
`;

export const StyledContainer = styled.div`
  //place container on top of datepicker input border
  margin-top: -1px;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  box-sizing: border-box;
  border: ${({ theme }) => `${theme.borders['border-1px--solid']['border-width'].value}
  ${theme.borders['border-1px--solid']['border-style'].value}
  ${theme.colors.colours.default['digital-black'].value}`};
  width: 100%;
  user-select: none;
  padding: ${({ theme }) => `${theme.sizes.xl.value} ${theme.sizes.m.value} ${theme.sizes.m.value}`};
`;

export const StyledCalendar = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  position: relative;
  & .react-datepicker__header {
    background-color: transparent;
    border-bottom: none;
    text-align: left;
  }
  & .react-datepicker__current-month {
    font-size: ${({ theme }) => theme.typography.desktop.text.medium_default['font-size'].value};
    font-weight: ${({ theme }) => theme.typography.desktop.headline.medium['font-weight'].value};
  }
  & .react-datepicker__day-names {
    font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
    width: 100%;
    margin-top: ${({ theme }) => theme.sizes.l.value};
    margin-bottom: ${({ theme }) => theme.sizes.m.value};
    background-color: ${({ theme }) => theme.colors.colours.support['20'].value};
    justify-content: space-between;
    display: flex;
    padding: 0  ${({ theme }) => theme.sizes.xs.value};
    box-sizing: border-box;
  }
  & .react-datepicker__day-name {
    color: ${({ theme }) => theme.colors.colours.support['60'].value};
    width: auto;
    display: inline-block;
    width: ${({ theme }) => theme.sizes.l.value};
    line-height: ${({ theme }) => theme.sizes.l.value};
    text-align: center;
    margin: 0.166rem;
    
  }
  & .react-datepicker__month-container {
      width 100%;
      overflow: hidden;
  }
  & .react-datepicker__month {
    padding: 0  ${({ theme }) => theme.sizes.xs.value};
  }
  & .react-datepicker__week {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${({ theme }) => theme.sizes['4xs'].value};
      white-space: nowrap;
  }
  & .react-datepicker__day {
      position: relative;
      text-align: center;
      cursor: pointer;
      width: ${({ theme }) => theme.sizes.l.value};
      height: ${({ theme }) => theme.sizes.l.value};
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      font-weight: ${({ theme }) => theme.typography.desktop.text.small_bold['font-weight'].value};
      &:hover {
        background-color: ${({ theme }) => theme.colors.colours.support['20'].value};
      }
  }
  & .react-datepicker__day--today {
      border: ${({ theme }) => `${theme.borders['border-1px--solid']['border-width'].value}
      ${theme.borders['border-1px--solid']['border-style'].value}
      ${theme.colors.colours.default['digital-black'].value}`};
      &:hover {
        background-color: inherit;
      }
  }
  & .react-datepicker__day--in-range {
    position: relative;
    background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  }
  & .react-datepicker__day--selected, 
  & .react-datepicker__day--range-end {
    background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    color: ${({ theme }) => theme.colors.colours.default.white.value};
    &:hover {
      background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    }
  }
  & .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--selected) {
    background-color: ${({ theme }) => theme.colors.colours.support['20'].value};
  }
  & .react-datepicker__day--in-selecting-range ~ .react-datepicker__day--in-selecting-range,  
  & .react-datepicker__day--in-selecting-range:first-of-type,
  & .react-datepicker__day--in-range:not(.react-datepicker__day--range-start) {
    &::before {
      width: 130%;
      height: 100%;
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
      z-index: -1;
      right: 50%;
    }
  }
  & .react-datepicker__day--in-selecting-range,
  & .react-datepicker__day--in-range:not(.react-datepicker__day--range-end) {
    &::after{
      width: 130%;
      height: 100%;
      content: "";
      position: absolute;
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
      z-index: -1;
      left: 50%;
    }
  }
  & .react-datepicker__navigation {
    width: ${({ theme }) => theme.sizes.l.value};
    height: ${({ theme }) => theme.sizes.l.value};
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    padding: 0;
    border: none;
    z-index: 1;
    text-indent: -999em;
    overflow: hidden;
    top: ${({ theme }) => `-${theme.sizes['2xs'].value}`};
  }
  & .react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: ${({ theme }) => theme.typography.desktop.headline.large['font-size'].value};
    width: 0;
    &:before {
        border-radius: 1px;
        border-width: ${({ theme }) =>
          `${theme.borders['border-2px--solid']['border-width'].value} ${theme.borders['border-2px--solid']['border-width'].value} 0 0`};
        border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
        content: "";
        display: block;
        height: ${({ theme }) => theme.sizes['2xs'].value};
        position: absolute;
        top: ${({ theme }) => theme.sizes['3xs'].value};
        width: ${({ theme }) => theme.sizes['2xs'].value};
        border-style: solid;
    }
  }
  & .react-datepicker__day--disabled {
    font-weight: ${({ theme }) => theme.typography.desktop.text.small_default['font-weight'].value};
    color: ${({ theme }) => theme.colors.colours.support['60'].value};
  }
  & .react-datepicker__navigation--previous {
      left: initial;
      right: ${({ theme }) => theme.sizes['4xl'].value};
  }
  & .react-datepicker__navigation-icon--previous {
    &:before {
      transform: rotate(225deg);
    }
  }
  & .react-datepicker__navigation--next {
    left: initial;
    right: ${({ theme }) => theme.sizes.xs.value};
  }
  & .react-datepicker__navigation-icon--next {
    &:before {
      transform: rotate(45deg);
      left: ${({ theme }) => `-${theme.sizes.xs.value}`};
    }
}
`;