import styled from 'styled-components';

export const StyledToggleContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const StyledToggleButton = styled.button`
border-radius: 4px;
    background-color: white;
    padding: 5px 10px;
    font-size: 12px;
    margin-bottom: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;