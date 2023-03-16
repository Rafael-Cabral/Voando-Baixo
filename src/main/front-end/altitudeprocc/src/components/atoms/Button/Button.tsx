import { useState } from 'react';
import { StyledButton, ButtonProps } from './Button.styles';

export const Button = ({ variant, icon, type, mb, mt, ml, mr, onClick, children }: React.PropsWithChildren<ButtonProps>) => {
    return (
      <StyledButton variant={variant} type={type} mb={mb} mt={mt} ml={ml} mr={mr} onClick={onClick}>
            {children}
            {icon && icon}
      </StyledButton>
    );
  };
  