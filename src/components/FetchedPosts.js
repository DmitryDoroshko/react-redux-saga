import React from "react";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import Loader from "./Loader";


const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const isLoading = useSelector(state => state.app.loading);

    if (isLoading) {
        return <Loader/>
    }

    if (!posts.length) {
        return <button className="btn btn-primary"
                       onClick={() => dispatch(fetchPosts())}
        >Load Posts</button>
    }

    return posts.map((post) => {
        return <Post title={post.title} key={post.id}/>
    })
}

export default FetchedPosts;