import React from "react";

const Post = ({title}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
            </div>
        </div>
    )
}

export default Post;