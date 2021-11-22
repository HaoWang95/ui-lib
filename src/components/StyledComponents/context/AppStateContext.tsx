import { createContext, ReactNode, useContext } from "react";

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "ToDo",
      tasks: [{ id: "1", text: "React with typescript" }],
    },
    {
      id: "1",
      text: "InProgress",
      tasks: [{ id: "2", text: "Advanced React concepts" }],
    },
    {
      id: "3",
      text: "Completed",
      tasks: [{ id: "3", text: "Basic web app concepts" }],
    },
  ],
};

export type AppState = {
  lists: List[];
};

type AppStateContextProps = {
  lists: List[];
  getTaskByListId(id: string): Task[];
};

// Create a context in React, set the current context to empty by default
const ApplicationContainerContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);


// The state provider will be wrapped outside of the AppContainer component
export const AppContainerStateProvider = ({ children }: any) => {
  const { lists } = appData;
  const getTaskByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };
  return (
    // this is where to initialize the context
    <ApplicationContainerContext.Provider value={{ lists, getTaskByListId }}>
      {children}
    </ApplicationContainerContext.Provider>
  );
};

export const useApplicationState = () => {
    return useContext(ApplicationContainerContext);
}
