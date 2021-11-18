import styled from "styled-components";

type AddItemButtonProps = {
    dark?: boolean;
}

export const AddItemButton = styled.button<AddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 2px;
    border: none;
    color: ${props => (props.dark?"#000":"#fff")};
    cursor: pointer;
    max-width: 200px;
    padding: 10px 12px;
    text-align: left;
    transition: background 120ms ease-in;
    width: 100%;
    &:hover{
        background-color: #ffffff70;
    }
`;