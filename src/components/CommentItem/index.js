import { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import "./index.css";

class CommentItem extends Component {
  render() {
    const { eachComment, toggleIsLiked, onClickDelete } = this.props;
    const { id, name, comment, time, isLiked, profileClass } = eachComment;

    return (
      <li className="list-cont">
        <div className="row-first">
          <p className={`profile-bg ${profileClass}`}>{name[0]}</p>
          <div className="comment-info">
            <p className="name">{name}</p>
            <p className="time">{formatDistanceToNow(new Date(time))} ago</p>
          </div>
        </div>
        <p className="comment">{comment}</p>
        <div className="row-last">
          <button
            onClick={() => toggleIsLiked(id)}
            className="comment-button"
            type="button"
          >
            <img
              src={
                isLiked
                  ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              }
              alt="like"
              className="like-img"
            />
          </button>
          <button
            onClick={() => onClickDelete(id)}
            className="comment-button"
            type="button"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </li>
    );
  }
}

export default CommentItem;
