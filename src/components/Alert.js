import React from "react";

const Alert = ({title}) => {
    return (
        <div className="alert alert-warning" role="alert">
            {title}
        </div>
    );
}

export default Alert;