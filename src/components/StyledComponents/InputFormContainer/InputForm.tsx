import { useCallback, useEffect, useState, VFC } from "react";
import styled from "styled-components";
import { AddItemButton } from "../AddItemButton/AddItemButton";

// Create the form div
export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

// Create the form button
export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 2px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

// Create the form input
const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0px 1px 1px 1px;
  margin-bottom: .5rem;
  padding: .5rem 1rem;
  width: 100%;
`;

type NewItemFormProps = {
  onAdd(text: string): void;
}

export const AddItemForm: VFC<NewItemFormProps> = ({onAdd}: NewItemFormProps) => {
  const [text, setText] = useState("");

  const handleTextChange = useCallback((e) => {setText(e.target.value)},[text])
  const handleNewItemOnClick = useCallback(() => {onAdd(text)},[text]);

  return(
    <NewItemFormContainer>
      <NewItemInput value={text} onChange={handleTextChange} />
      <NewItemButton onClick={handleNewItemOnClick} >
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}