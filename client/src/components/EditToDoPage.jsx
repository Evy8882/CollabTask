import React, { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faPlusCircle, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Modal } from "./Modal";

function EditToDoPage({ data }) {
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState("")
    const [update, setUpdate] = useState(true)
    const [showModal, setShowModal] = useState("hidden");
    const [showCompleted, setShowCompleted] = useState(true);
    const [showJustFavorites, setShowJustFavorites] = useState(false);

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
        if (tasks.length) {
            let newItems = tasks.map((item, index) => {
                let newItem = item
                newItem.index = index
                return newItem
            })
            // console.log(newItems)
            axios.put("http://localhost/CollabTask/server/edit_tasks.php", newItems)
        }
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
                <button className="cnfgTaskBtn" type="button" title="Configurações"
                    onClick={() => { setShowModal("show") }}>
                    <FontAwesomeIcon icon={faGear} style={{ "fontSize": "1.5em" }} />
                </button>
                <Modal show={showModal}>
                    <h3>Configurações de exibição</h3>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {showCompleted ? (
                            <button className="showCompleted-button button-completed" type="button"
                                onClick={() => setShowCompleted(false)}
                            ><FontAwesomeIcon icon={faCheck} /></button>
                        ) : (
                            <button className="dontShowCompleted-button button-completed" type="button"
                                onClick={() => setShowCompleted(true)}
                            ><FontAwesomeIcon icon={faTimes} /></button>
                        )}
                        Mostrar tarefas concluídas
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {showJustFavorites ? (
                            <button className="showCompleted-button button-completed" type="button"
                                onClick={() => setShowJustFavorites(false)}
                            ><FontAwesomeIcon icon={faCheck} /></button>
                        ) : (
                            <button className="dontShowCompleted-button button-completed" type="button"
                                onClick={() => setShowJustFavorites(true)}
                            ><FontAwesomeIcon icon={faTimes} /></button>
                        )}
                        Mostrar apenas tarefas favoritadas
                    </div>
                    <button className="cancelButton" onClick={() => { setShowModal("hidden") }}>Fechar</button>
                </Modal>
            </form>
            <div className="toDoSection">
                <DragDropContext onDragEnd={dragEnd}>
                    <Droppable droppableId="toDo" type="list" direction="vertical">
                        {(provided) => (
                            <article className="toDoContainer"
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {tasks.map((task, index) => (
                                    <React.Fragment>
                                        {(showCompleted || task.done == "0") && (showJustFavorites == false || task.favorite == "1") ? (
                                            <ToDoItem
                                                key={task.id}
                                                id={String(task.id)}
                                                index={index}
                                                taskName={task.taskName}
                                                done={task.done}
                                                favorite={task.favorite}
                                                update={() => { setUpdate(true) }}
                                            />
                                        ) : null}
                                    </React.Fragment>
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