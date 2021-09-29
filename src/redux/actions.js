import {CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST, payload: {
            post: post,
        }
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(title) {
    return async dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                alert: {
                    title: title
                }
            }
        });

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS,
    }

    // return async dispatch => {
    //     try {
    //         dispatch(showLoader());
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
    //         const json = await response.json();
    //
    //         dispatch({
    //             type: FETCH_POSTS,
    //             payload: {fetchedPosts: [...json]}
    //         });
    //
    //         dispatch(hideLoader());
    //     } catch (error) {
    //         dispatch(hideLoader());
    //         dispatch(showAlert("Something went wrong"));
    //     }
    // }
}