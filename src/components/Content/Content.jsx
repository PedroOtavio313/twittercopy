import React from "react";
import './Content.css' 

const Content = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post, index) => (
                <div key={index} className="post">
                    {post}
                </div>
            
            ))}
        </div>
    )  
}

export default Content
