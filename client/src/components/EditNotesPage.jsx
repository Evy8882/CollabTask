import React, { useEffect } from "react";
import { createSwapy } from 'swapy';

function EditNotesPage({ data = {} }) {

    useEffect(() => {
        const container = document.querySelector('.editNotesContainer')
        const swapy = createSwapy(container, { animation: "none" })
        swapy.onSwap(({ data }) => {
            console.table(data);
        })
    })
    

    return (
        <div className="editNotesContainer">
            <div className="slot a note-slot" data-swapy-slot="1">
                <div className="note" data-swapy-item="a">
                <div className="handle" data-swapy-handle></div>
                <div className="note-content" contentEditable>

                </div>
                </div>
            </div>
            <div className="slot a note-slot" data-swapy-slot="2">
                <div className="note" data-swapy-item="b">
                    <div className="handle" data-swapy-handle></div>
                    <div className="note-content" contentEditable>

                    </div>
                </div>
            </div>
            <div className="slot a note-slot" data-swapy-slot="3">
                <div className="note" data-swapy-item="c">
                <div className="handle" data-swapy-handle></div>
                <div className="note-content" contentEditable>

                </div>
                </div>
            </div>
        </div>
    )
}
export default EditNotesPage