import React from "react";
import { Draggable } from "@hello-pangea/dnd";

export const ToDoItem = ({ id, index, taskName }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                < div className="toDoItem" ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {taskName}
                </div>
            )}
        </Draggable>
    )
}