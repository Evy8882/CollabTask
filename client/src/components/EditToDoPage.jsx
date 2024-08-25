import React, { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function EditToDoPage({ data }) {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        setTasks([
            {
                id: 1,
                index: 1,
                taskName: "Projetar"
            },
            {
                id: 2,
                index: 2,
                taskName: "Executar"
            },
            {
                id: 3,
                index: 3,
                taskName: "Testar"
            }
        ])
    }, [])

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
      };

    function dragEnd(result) {
        if (!result.destination) {
            return;
        }
        const items = reorder(tasks,
            result.source.index,
            result.destination.index);
        setTasks(items)
    }

    return (
        <div className="editToDoContainer">
            <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Nome da tarefa" />
            <button className="addTaskBtn" title="Adicionar Tarefa"><FontAwesomeIcon icon={faPlusCircle} style={{ "fontSize": "1.5em" }} /></button>
            <button className="cnfgTaskBtn" type="button" title="Configurações"><FontAwesomeIcon icon={faGear} style={{ "fontSize": "1.5em" }} /></button>
            </form>
            <div className="toDoSection">
                <DragDropContext onDragEnd={dragEnd}>
                    <Droppable droppableId="toDo" type="list" direction="vertical">
                        {(provided) => (
                            <article className="toDoContainer"
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {tasks.map((task, index) => (
                                    <ToDoItem id={String(task.id)} index={index} taskName={task.taskName} key={task.id} />
                                ))}
                                {provided.placeholder}
                            </article>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}
export default EditToDoPage