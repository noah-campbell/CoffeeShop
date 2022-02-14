import React, { Component } from "react"
import Ably from "./Ably"
import axios from "axios";

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
    return (
      <div>
        <h1 className="title">Please leave your feedback below</h1>
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Your name"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                name="comment"
                placeholder="Add a comment"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentBox