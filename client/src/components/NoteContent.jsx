import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


export const NoteContent = ({ id, content, h, reset }) => {
    const [cont, setCont] = useState(content)
    const area = useRef();

    useEffect(() => {
        console.log(cont)
    }, [cont])

    function delNote() {
        axios.post("http://localhost/CollabTask/server/delete_note.php", { id: id })
            .then(reset)
            .catch(err => console.log(err))
    }

    return (
        <div className="noteContent">
            <nav className="noteNav">
                <button className="noteNavItem" onClick={() => { area.current.focus() }}><FontAwesomeIcon icon={faPencil} /></button>
                <button className="noteNavItem" onClick={delNote}><FontAwesomeIcon icon={faTrash} /></button>
            </nav>
            <textarea className="noteArea" ref={area}>{cont}</textarea>
        </div>
    )
}