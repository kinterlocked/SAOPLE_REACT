import React, { Component, useState } from "react";

function ConfirmButton(props){
    const[ isConfirmed, setIsConfirmed ] = useState(false);

    const handleconfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return(
        <button onClick = {handleconfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "아직" }
        </button>
    );
}

export default ConfirmButton;