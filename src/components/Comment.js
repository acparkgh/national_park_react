import React from 'react';

class Comment extends React.Component {

  render() {
    return (

        <ul>
          <li>
            Commented by: {this.props.user.screen_name}<br></br>
            {this.props.comment}<br></br>
          </li>
        </ul>

    )
  }

}

export default Comment;