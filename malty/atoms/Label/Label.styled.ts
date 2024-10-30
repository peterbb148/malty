import { space } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';
import { StyledLabelProps } from './Label.types';

export const StyledLabel = styled.label<StyledLabelProps>`
  font-family: ${({ theme }) => theme.typographyV2.montserrat.body[14].bold.fontFamily};
  color: ${({ theme }) => theme.colorsV2.default.neutral[900]};
  font-size: ${({ theme }) => theme.typographyV2.montserrat.body[14].bold.fontSize};
  line-height: ${({ theme }) => theme.typographyV2.montserrat.body[14].bold.lineHeight};
  margin-bottom: ${({ theme }) => theme.sizesV2['2xs']};
  font-weight: ${({ theme }) => theme.typographyV2.montserrat.body[14].bold.fontWeight};
  display: inline-block;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colorsV2.default.neutral[200]};
    `}
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: ' *';
        color: ${({ theme }) => theme.colorsV2.default.neutral[50]};
      }
    `}

  ${space}
`;
