import React from "react";
import {connect} from "react-redux";
import {createPost, hideAlert, showAlert} from "../redux/actions";
import Alert from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: ""};
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {title} = this.state;

        if (title.trim().length === 0) {
            return this.props.showAlert("Post title should not be empty...");
        }

        const newPost = {
            title,
            id: Date.now().toString(),
        };

        this.props.createPost(newPost);

        this.setState({title: ""});
    }

    inputChangeHandler = (event) => {
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }));
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert title={this.props.alert.title}/>}
                <div className="input-group mb-3">
                    <span className="input-group-text">Enter your post please...</span>
                    <input type="text"
                           id="title"
                           className="form-control"
                           aria-label="Enter post from a user)"
                           value={this.state.title}
                           name="title"
                           onChange={this.inputChangeHandler}
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success">Create</button>
                </div>
            </form>
        );
    }

}

const mapDispatchToProps = {
    createPost,
    showAlert,
    hideAlert,
}

const mapStateToProps = (state) => {
    return {alert: state.app.alert};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);