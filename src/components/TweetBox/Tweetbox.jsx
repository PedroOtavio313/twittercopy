import React from "react";
import './Tweetbox.css';
import { useState } from "react";

const Tweetbox = ({ addPost }) => {
    const [postContent, setPostContent] = useState("")
    const handleInputChange = (event) => {
        setPostContent(event.target.value)
    }

    const handlePost = () => {
        if(postContent.trim()) {
            addPost(postContent)
            setPostContent("")
        }
    }

    const [activeTab, setActiveTab] = useState("Para você");
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    return (
        <div className="tweetbox-containerrepartition">
        <div className="tweetbox-container">
            <div className="tabs">
                <span className={`tab ${activeTab === "Para você" ? "active" : ""}`} onClick={ ()=> handleTabClick("Para você")}>Para você</span>
                <span className={`tab ${activeTab === "Seguindo" ? "active" : ""}`} onClick={()=> handleTabClick("Seguindo")}>Seguindo</span>
            </div>

        <div className="comments"> 
            <textarea className="textoo" placeholder="O que está pensando hoje?" value={postContent} onChange={handleInputChange} > </textarea>
            <button className="post-button">Postar</button>
        </div>
    </div>
    </div>
    );
};

export default Tweetbox;
