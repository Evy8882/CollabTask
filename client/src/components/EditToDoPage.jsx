import React, { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function EditToDoPage({ data }) {
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState("")
    const [update, setUpdate] = useState(true)

    useEffect(() => {
        if (update) {
            axios.get("http://localhost/CollabTask/server/get_tasks.php?project=" + data.id)
                .then(res => {
                    setTasks(res.data)

                })
                .catch(err => console.log(err))
            setUpdate(false)
        }
        //eslint-disable-next-line
    }, [update])

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

    useEffect(() => {
        if (tasks.length){
        let newItems = tasks.map((item, index) => {
            let newItem = item
            newItem.index = index
            return newItem
        })
        console.log(newItems)
        axios.put("http://localhost/CollabTask/server/edit_tasks.php", newItems)}
    }, [tasks])

    return (
        <div className="editToDoContainer">
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                axios.post("http://localhost/CollabTask/server/new_task.php", { project: data.id, taskName: taskName })
                    .then(() => {
                        setTaskName("");
                        setUpdate(true);
                    })
                    .catch(err => console.log(err))
            }}>
                <input type="text" placeholder="Nome da tarefa" value={taskName} required
                    onChange={(e) => {
                        setTaskName(e.target.value)
                    }} />
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