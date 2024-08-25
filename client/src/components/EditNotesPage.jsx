import React, { useEffect, useState } from "react";
import { NoteContent } from "./NoteContent";
import axios from "axios";

function EditNotesPage({ data = {} }) {
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost/CollabTask/server/get_notes.php?project=" + data.id)
            .then(res => {
                setNotes(res.data)
                
            })
            .catch(err => console.log(err))
            //eslint-disable-next-line
    }, [])

    return (
        <div className="editNotesContainer">
            {
                notes.map((item) => {
                    return (
                        <div className="slot a note-slot" key={item.id}>
                            <div className="note">
                                <div className="handle" data-swapy-handle></div>
                                <NoteContent text={item.id} />
                            </div>
                        </div>
                    )
                })
            }

            <div className="new-note" onClick={
                () => {
                    axios.post("http://localhost/CollabTask/server/new_note.php", { project: data.id })
                        .then((res) => console.log(res)).catch(err => console.log(err))
                }
            }>
                + CRIAR NOVA
            </div>

        </div>
    )
}
export default EditNotesPage