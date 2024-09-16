import React, { useEffect, useState } from "react";
import { NoteContent } from "./NoteContent";
import axios from "axios";

function EditNotesPage({ data = {} }) {
    const [notes, setNotes] = useState([])
    const [update, setUpdate] = useState(true)

    useEffect(() => {
        if (update) {
            axios.get("http://localhost/CollabTask/server/get_notes.php?project=" + data.id)
                .then(res => {
                    setNotes(res.data)
                })
                .catch(err => console.log(err))
            setUpdate(false);
        }
        //eslint-disable-next-line
    }, [update])

    function newNote() {
        axios.post("http://localhost/CollabTask/server/new_note.php", { project: data.id })
            .then(() => setUpdate(true))
            .catch(err => { console.log(err) })
    }

    return (
        <section className="editNotesContainer">
            <h1>Notas de trabalho</h1>
            <button onClick={newNote}>Nova Nota</button>
            {
                notes.map((note) => (
                    <NoteContent id={note.id} content={note.content} h={note.height} reset={() => setUpdate(true)} />
                ))
            }
        </section>
    )
}
export default EditNotesPage