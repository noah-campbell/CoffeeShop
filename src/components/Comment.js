import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';

class Comment extends Component {
  constructor(params) {
    super(params)
    this.messageDate = this.messageDateGet()
  }
  messageDateGet() {
    const date = new Date(this.props.comment.timestamp)
    const dateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }
    const localeString = date.toLocaleString(undefined, dateTimeFormatOptions)
    return localeString
  }
  render() {
    const { user } = this.props.auth0;

    return (
        <article className="media card p-3 mb-2">
            <figure className="d-flex justify-content-between align-items-center">
            <p className="image is-64x64">
                <img alt="dog pic" src={user.picture} />
                <h4>{user.nickname}</h4>
                <h5 className="user-name card-link">{this.props.comment.name} </h5>
            </p>
            </figure>
            <div className="media-content card-body">
            <div className="content">
                
                <p className="card-text">{this.props.comment.comment}</p>
                <div class="card-footer">
                    <span className="message-date text-muted">{this.messageDate}</span>
                </div>
            </div>
            </div>
        </article>
    )
  }
}

export default withAuth0(Comment);