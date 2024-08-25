import React, { useEffect, useRef, useState } from "react";

export const NoteContent = ({text}) => {
    const [cont,setCont] = useState(text)
    const note = useRef();

    useEffect(()=>{
        console.log(cont)
    },[cont])

    return (
        <div className="note-content"
        contentEditable
        dangerouslySetInnerHTML={{__html: cont}}
        ref={note}
        onBlur={(e) => {
            setCont(e.target.innerText.replace("<","&lt").replace(">","&gt"));
            
            }}>
        </div>
    )
}