import styled from 'styled-components';

export interface StyledModalMenuProps {
    visibility?: "visible" | "hidden";
    toggleVisibility?: any;
    onClick?: any;
    id: string;
}

export const StyledModalMenu = styled.div<StyledModalMenuProps>`

    width: 21rem;
    padding: 1.6rem;
    display: ${(props: StyledModalMenuProps) => props.visibility == "visible" ? "flex" : "none"};;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2.5rem;
    background-color: #ffffff;
    filter: drop-shadow(0rem 0rem 4rem rgba(0, 0, 0, 0.1));
    position: absolute;
    bottom: -8rem;
    right: -2rem;

`

export const StyledModalMenuItem = styled.div`

        cursor: pointer;

        margin-bottom: 1.6rem;

        transition: 0.2s;

        &:hover {
            font-weight: 600;
            scale: 1.15;
        }

`