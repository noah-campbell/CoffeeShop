import React, { Component } from "react"
import Ably from "./Ably"
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';


class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.addComment = this.addComment.bind(this)
  }

  async addComment(e) {
    e.preventDefault()
    const comment = e.target.elements.comment.value.trim()
    const name = e.target.elements.name.value.trim()
    const timestamp = Date.now()

    // Retrieve a random image from the Dog API
    const avatar = await (
      await axios.get("https://dog.ceo/api/breeds/image/random")
    ).data.message

    if (name && comment) {
      // include the avatar image in the commentObject
      const commentObject = { name, comment, timestamp, avatar }
      console.log(commentObject)

      const channel = Ably.channels.get("comments")
      channel.publish("add_comment", commentObject, (err) => {
        if (err) {
          console.log("Unable to publish message err = " + err.message)
        }
      })
    }
  }

  

  render() {
    const { user } = this.props.auth0;

    return (
      <div>
        <h1 className="display-4">Hey, <span className="forumName">{user.nickname}</span>!</h1> 
        <p className="form-text mb-4">leave a comment to join the recent coffee conversation</p>
        <form onSubmit={this.addComment} className="postForm">
            <input
                type="text"
                className="form-control mb-2 topic"
                name="name"
                placeholder="Title..."
            />
            <textarea
                className="form-control mb-2 comment"
                name="comment"
                placeholder="Add a comment"
            ></textarea>
            <button className="btn btn-primary mb-5 postBtn" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default withAuth0(CommentBox);