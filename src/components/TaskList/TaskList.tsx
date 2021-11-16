import * as React from "react";
import { Task } from "../Task";
import { TaskProps as TaskType } from "../Task";

export interface TaskListProps {
  loading: boolean;
  tasks: TaskType[];
  onPinTask: any;
  onArchiveTask: any;
}

export default function TaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) {
  const events = { onPinTask, onArchiveTask };
  if (loading) {
    return <div className="list-items">Loading</div>;
  }
  if (tasks.length === 0) {
    return <div className="list-items">Empty</div>;
  }
  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          state={task.state}
          {...events}
        />
      ))}
    </div>
  );
}
