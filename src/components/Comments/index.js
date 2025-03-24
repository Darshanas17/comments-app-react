import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentItem from "../CommentItem";
import "./index.css";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];
const initialCommentList = [
  {
    id: uuidv4(),
    name: "Aarav Sharma",
    comment: "India's history is so rich, every place has a story to tell!",
    time: new Date(Date.now() - 1000 * 60 * 5).toLocaleString(), // 5 minutes ago
    isLiked: false,
    profileClass:
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ],
  },
  {
    id: uuidv4(),
    name: "Priya Iyer",
    comment:
      "The food diversity in India is unbeatable! Love trying new dishes.",
    time: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    isLiked: false,
    profileClass:
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ],
  },
  {
    id: uuidv4(),
    name: "Vikram Khanna",
    comment: "India is making great progress in technology and space research!",
    time: new Date(Date.now() - 1000 * 60 * 60 * 3).toLocaleString(), // 3 hours ago
    isLiked: false,
    profileClass:
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ],
  },
  {
    id: uuidv4(),
    name: "Neha Kapoor",
    comment: "I love how every state in India has its own unique traditions!",
    time: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    isLiked: false,
    profileClass:
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ],
  },
  {
    id: uuidv4(),
    name: "Rahul Sen",
    comment:
      "The natural beauty of India, from beaches to mountains, is breathtaking!",
    time: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleString(), // 1 day ago
    isLiked: false,
    profileClass:
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ],
  },
];

class Comments extends Component {
  state = { name: "", comment: "", commentList: initialCommentList };

  toggleIsLiked = (id) => {
    this.setState((prevState) => ({
      commentList: prevState.commentList.map((eachComment) =>
        eachComment.id === id
          ? { ...eachComment, isLiked: !eachComment.isLiked }
          : eachComment
      ),
    }));
  };

  onAddComment = (event) => {
    event.preventDefault();
    const { name, comment } = this.state;
    if (name.trim() === "" || comment.trim() === "") return;

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      time: Date.now(),
      isLiked: false,
      profileClass:
        initialContainerBackgroundClassNames[
          Math.floor(
            Math.random() * initialContainerBackgroundClassNames.length
          )
        ],
    };

    this.setState((prevState) => ({
      commentList: [newComment, ...prevState.commentList],
      name: "",
      comment: "",
    }));
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  onClickDelete = (id) => {
    this.setState((prevState) => ({
      commentList: prevState.commentList.filter(
        (eachComment) => eachComment.id !== id
      ),
    }));
  };

  render() {
    const { name, comment, commentList } = this.state;
    return (
      <div className="bg-cont">
        <h1>Comments</h1>

        <div className="cont">
          <div>
            <p>Share your thoughts about India in the comments!</p>
            <form
              className="contact-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                onChange={this.onChangeName}
                value={name}
                className="input"
                placeholder="Your Name"
              />
              <textarea
                className="textarea"
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                rows="5"
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-img"
          />
        </div>
        <hr className="horizontal-line" />
        <p className="comment-count">
          <span className="count">{commentList.length} </span>Comments
        </p>
        <ul className="comment-list">
          {commentList.map((eachComment) => (
            <CommentItem
              key={eachComment.id}
              eachComment={eachComment}
              toggleIsLiked={this.toggleIsLiked}
              onClickDelete={this.onClickDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;
