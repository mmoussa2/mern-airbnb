import React from 'react';
import './message.css';
import "../../assets/root.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createConversations = this.createConversations.bind(this);
    this.handleConvoClick = this.handleConvoClick.bind(this);
  }

  handleConvoClick (e) {
    e.preventDefault()
    this.props.history.push(`/messages/${e.currentTarget.id}`)
  }

  componentDidMount() {
    this.props.sendGetMessages()
    this.props.sendGetUsers()
  }

  preventBubbling(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({ search: e.currentTarget.value })
  }

  conversationPartner (messageObject, currentUserId) {
    if (messageObject.sender_id === currentUserId) {
      return messageObject.receiver_id
    } else {
      return messageObject.sender_id
    }
  }

  createConversations () {
    if (this.props.messages) {
      const uniqueConversations = {};
      Object.values(this.props.messages).forEach(message => {
        const convoPartner = this.conversationPartner(
          message, this.props.currentUser
        )
        if (uniqueConversations[convoPartner]) {
          if (uniqueConversations[convoPartner].timestamp  < message.timestamp) {
            uniqueConversations[convoPartner] = message
          }
        } else {
          uniqueConversations[convoPartner] = message
        }
      })
      return uniqueConversations
    }
  }

  render() {
    if (Object.values(this.props.messages).length === 0) return null;
    if (Object.values(this.props.users).length === 0) return null;
    if (!this.props.currentUser) return null;
    const uniqueConversations = this.createConversations()
    return (
      <div className="message-wrapper flex align-center flex-end column">
        {Object.keys(uniqueConversations).map((conversationUserId, index) => {
          const timeStamp = uniqueConversations[conversationUserId].timestamp.toString().split("T")[0].split("-")
          const year = timeStamp[0]
          const month = timeStamp[1]
          const day = timeStamp[2]
          return (
            <div 
              id={conversationUserId} 
              key={index} 
              className="conversation-wrapper flex"
              onClick={this.handleConvoClick}
            >
              <div className="convobox-avatar">
                <img class="convo-avatar" src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png" alt=""/>
              </div>
              <div className="convobox-name">
                {this.props.users[conversationUserId].name} <br />
                <small>{`${month}/${day}/${year}`}</small>
              </div>
              <div className="convobox-message">
                {uniqueConversations[conversationUserId].body}
              </div>
              <div className="convobox-status">status</div>
              
            </div>
          )
        })} 
      </div>
    );
  }
}

export default Message;