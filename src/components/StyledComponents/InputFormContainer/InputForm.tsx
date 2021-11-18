import { VFC } from "react";
import styled from "styled-components";

const FormDiv = styled.div`
    max-width: 200px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start
`;

const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 2px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
`;

const FormInput = styled.input`
    border-radius: 2px;
    border: none;
    box-shadow: lightgreen, 0.5px 0.5px 0.5px 0.5px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
`;