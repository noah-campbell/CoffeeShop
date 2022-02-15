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
      <div className="container commentBox">
        <article className="p-3 mb-3">
            <figure className="row">
              <div className="col-8 row">
                <img alt={user.name} src={user.picture} className="align-baseline commentImg mx-0" />
                <h6 className="align-baseline ml-2 my-auto">{user.given_name}</h6>
              </div>
              <div class="col-4 my-auto">
                    <span className="text-muted float-right">{this.messageDate}</span>
                </div>
            </figure>
            <div className="row"> 
              <p className="align-middle ml-4">{this.props.comment.comment}</p>
            </div>
        </article>
      </div>
    )
  }
}

export default withAuth0(Comment);