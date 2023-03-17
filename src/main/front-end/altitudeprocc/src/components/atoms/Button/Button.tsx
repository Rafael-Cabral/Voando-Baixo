import { useState } from 'react';
import { StyledButton, ButtonProps } from './Button.styles';

export const Button = ({ variant, icon, type, mb, mt, ml, mr, onClick, disabled, children }: React.PropsWithChildren<ButtonProps>) => {
    return (
      <StyledButton variant={variant} type={type} mb={mb} mt={mt} ml={ml} mr={mr} onClick={onClick} disabled={disabled}>
            {children}
            {icon && icon}
      </StyledButton>
    );
  };
  