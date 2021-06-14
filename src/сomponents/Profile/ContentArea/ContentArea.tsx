import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import stylesModule from "./ContentArea.module.css";
import {ProfilePageType} from "../../../redux/profile-reducer";

type ContentAreaPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
    profilePage: ProfilePageType
}

const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    let postsElements = props.profilePage.posts
        .map(p => <Post key={p.id} message={p.messages} likesCount={p.likesCount}/>);

    const onAddPost = () => {
        if(props.profilePage.newPostText.trim()){
            props.addPost(props.profilePage.newPostText);
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onAddPost();
        }
    }

    return (
        <div className={stylesModule.postBlock}>
            <h3>My posts</h3>
            <hr/>
            <div>
                <textarea
                    value={props.profilePage.newPostText}
                    onChange={onPostChange}
                    onKeyPress={onKeyPressHandler}
                    placeholder="Write something"
                />
            </div>
            <div>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={stylesModule.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export {
    ContentArea
}
