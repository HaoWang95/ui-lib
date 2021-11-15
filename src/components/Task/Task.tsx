import * as React from 'react';
import './Task.css';

export interface TaskProps{
    id: string;
    title: string;
    state: string;
}

function Task({id, title, state}: TaskProps, onArchiveTask: any, onPinTask: any): JSX.Element{
    return(
        <div className="tasklist-item">
            <input type="text" value={title} readOnly={true} />
        </div>
    )
}

export default Task;