import { useState } from 'react';
import { StyledButton, ButtonProps } from './Button.styles';

export const Button = ({ variant, icon, children }: React.PropsWithChildren<ButtonProps>) => {
    return (
      <StyledButton variant={variant}>
            {children}
            {icon && icon}
      </StyledButton>
    );
  };
  