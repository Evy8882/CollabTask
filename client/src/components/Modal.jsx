import React from "react";
//import { useNavigate } from "react-router-dom";

export const Modal = ({ show = "hidden", children }) => {
    //const navigate = useNavigate()
    if (show !== "hidden") {
        return (
            <div className="modal">
                {children}
            </div>
        )
    }
}