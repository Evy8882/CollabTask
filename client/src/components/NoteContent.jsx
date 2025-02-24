import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


export const NoteContent = ({ id, content, h, reset }) => {
    const [cont, setCont] = useState(content)
    const [height, setHeight] = useState(h);
    const area = useRef();

    function delNote() {
        axios.post("http://localhost/CollabTask/server/delete_note.php", { id: id })
            .then(reset)
            .catch(err => console.log(err))
    }

    const saveContent = React.useCallback(() => {
        const newHeight = Number(area.current.style.height.replace("px", ""));
        setHeight(newHeight);
        axios.put("http://localhost/CollabTask/server/edit_note.php", { id: id, content: cont, height: newHeight })
            .then(reset)
            .catch(err => console.log(err))
    }, [id, cont, reset]);

    React.useEffect(() => {
        const observer = new MutationObserver(() => {
            saveContent();
        });

        if (area.current) {
            observer.observe(area.current, { attributes: true, attributeFilter: ['style'] });
        }

        return () => {
            observer.disconnect();
        };
        // eslint-disable-next-line
    }, [saveContent]);

    return (
        <div className="noteContent">
            <nav className="noteNav">
                <button className="noteNavItem" onClick={() => { area.current.focus() }}><FontAwesomeIcon icon={faPencil} /></button>
                <button className="noteNavItem" onClick={delNote}><FontAwesomeIcon icon={faTrash} /></button>
            </nav>
            <textarea className="noteArea" ref={area}
                onChange={e => setCont(e.target.value)}
                onBlur={saveContent}
                value={cont ?? ""}
                style={{ height: height + "px" }}
            ></textarea>
        </div>
    )
}