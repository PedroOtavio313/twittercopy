import React, { useState } from "react";
import TweetBox from '../TweetBox/Tweetbox.jsx';
import Content from "../Content/Content.jsx";

const Main = () => {
    const [posts, setPosts] = useState([])
    //função para adicionar novo post
    const addPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    return (
        <div>
            <TweetBox addPost={addPost} />
            <Content posts={posts} />
        </div>
    )
}

export default Main