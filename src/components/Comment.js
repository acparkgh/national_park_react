import React from 'react';

class Comment extends React.Component {

  render() {
    return (
      <div>
        <em>*** Comment component ***</em>
        <br></br>
        Commented by: {this.props.user.screen_name}
        <br></br>
        {this.props.comment}
        <br></br>
      </div>
    )
  }

}

export default Comment;