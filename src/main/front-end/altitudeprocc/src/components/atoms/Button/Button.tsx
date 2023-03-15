import { useState } from 'react';
import { StyledButton, ButtonProps } from './Button.styles';

export const Button = ({ variant, icon, type, children }: React.PropsWithChildren<ButtonProps>) => {
    return (
      <StyledButton variant={variant} type={type}>
            {children}
            {icon && icon}
      </StyledButton>
    );
  };
  