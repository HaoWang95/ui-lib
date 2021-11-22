import {Story, Meta} from "@storybook/react";
import {AddNewItem} from "./AddItemButton";

export default {
    component: AddNewItem,
    title: "StyledComponents/AddNewItem"    
} as Meta;

export const DefaultAddNew: Story = () => (
    <AddNewItem 
        dark={true}
        onAdd={() => {console.log("onAdd")}}
        buttonText="+ Add a new item"
    />
)