import { VFC, useState, useCallback } from "react";
import styled from "styled-components";
import { AddItemForm } from "../InputFormContainer/InputForm";

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background-color: #ffffff3d;
  border-radius: 2px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  cursor: pointer;
  max-width: 200px;
  padding: 10px 12px;
  text-align: left;
  transition: background 120ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffff70;
  }
`;

type AddItemProps = {
  // onAdd is the callback function when the button is clicked.
  onAdd(text: string): void;
  buttonText: string;
  dark: boolean;
};

export const AddNewItem: VFC<AddItemProps> = (props: AddItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, buttonText, dark } = props;

  if (showForm) {
    return (
      <AddItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {buttonText}
    </AddItemButton>
  );
};
