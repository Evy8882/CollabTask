import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const ToDoItem = ({ id, index, taskName, done, update }) => {
    function complete(){
        let newDone = done === "1" ? 0 : 1;
        axios.put("http://localhost/CollabTask/server/complete_task.php", {done: newDone, id: id})
        .then(update)
        .catch((err)=>{console.log(err)})
    }
    function delTask(){
        axios.post("http://localhost/CollabTask/server/delete_task.php", {id: id})
        .then(update)
        .catch((err)=>{console.log(err)})
    }


    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                < div className={done === "0" ? "toDoItem" : "toDoItem done"} ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {taskName}
                    <div className="taskActions">
                        {/* <button className="editTaskButton" title="Editar"><FontAwesomeIcon icon={faPencil}/></button> */}
                        <button className="delTaskButton" title="Concluído" onClick={complete}><FontAwesomeIcon icon={faCheck}/></button>
                        <button className="delTaskButton dangerButton" title="Excluir" onClick={delTask}><FontAwesomeIcon icon={faXmarkCircle}/></button>
                    </div>
                </div>
            )}
        </Draggable>
    )
}