import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const Volume = ({ dataTestId = 'icon-Volume', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.03 2.363a1 1 0 011.513-.032 22.455 22.455 0 011.823 2.398c.628.956 1.13 1.897 1.462 2.801.28.765.432 1.488.432 2.17 0 2.961-1.9 4.89-4.43 4.89a4.37 4.37 0 01-.86-.06l.021.285.009.335C15 19.306 12.344 22 8.81 22c-3.693 0-6.2-2.617-6.2-6.85 0-.887.185-1.831.53-2.825.478-1.382 1.252-2.828 2.24-4.299A31.629 31.629 0 018.078 4.57a1 1 0 011.465 0 28.517 28.517 0 01.85.986 32.28 32.28 0 011.354 1.765l.13-.263.171-.327c.288-.534.625-1.091 1.001-1.663a34.125 34.125 0 011.98-2.704zM8.81 6.778l-.04.049c-.59.715-1.18 1.496-1.73 2.314-.9 1.34-1.596 2.641-2.01 3.839-.277.797-.42 1.526-.42 2.17 0 3.147 1.63 4.85 4.2 4.85 2.423 0 4.19-1.792 4.19-4.85 0-.644-.142-1.373-.418-2.171-.415-1.197-1.11-2.499-2.008-3.839A29.647 29.647 0 008.81 6.778zm7.01-2.177c-.376.503-.75 1.03-1.1 1.564a20.636 20.636 0 00-.912 1.514c-.352.652-.602 1.23-.734 1.708l.005-.017c.588 1.007 1.061 1.997 1.393 2.955l-.037-.1c.398.25.866.38 1.365.365 1.45 0 2.46-1.027 2.46-2.89 0-.422-.105-.922-.31-1.481-.272-.742-.705-1.554-1.256-2.393a20.128 20.128 0 00-.873-1.225z" />
    </g>
  </BaseIcon>
);