import React from 'react';
import './conversation.css';
import "../../assets/root.css";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createConversation = this.createConversation.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

    this.state = {
      body: "",
      sender_id: props.currentUser,
      receiver_id: props.match.params[0].split("/")[0]
    }
  }

  sendMessage(e) {
    e.preventDefault()
    this.props.createMessage(this.state)
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
    this.setState({ body: e.currentTarget.value })
  }

  verifyConversationPartner(messageObject, userId) {
    if (messageObject.sender_id === userId) {
      return true
    } else if (messageObject.receiver_id === userId) {
      return true
    } else {
      return false
    }
  }

  createConversation() {
    const conversationMessages = []
    const conversationPartner = this.props.match.params[0].split("/")[0]
    Object.values(this.props.messages).forEach(message => {
      if (this.verifyConversationPartner(message, conversationPartner)) {
        conversationMessages.push(message)
      }
    })

    return conversationMessages
  }

  

  render() {
    if (Object.values(this.props.messages).length === 0) return null;
    if (Object.values(this.props.users).length === 0) return null;
    if (!this.props.currentUser) return null;
    const thisConversation = this.createConversation()

    console.log(this.state)
    return (
      <div className="full-conversation-wrapper flex">
        <div className="convo-main p">
          {thisConversation.map((message, index) => {
            const timeStamp = message.timestamp.toString()
            .split("T")[0].split("-")
            const year = timeStamp[0]
            const month = {
              "01":"Jan", "02":"Feb",
              "03":"Mar", "04":"Mar",
              "05":"May", "06":"Jun",
              "07":"Jul", "08":"Aug",
              "09":"Sep", "10":"Oct",
              "11":"Nov", "12":"Dec"
            }[timeStamp[1]]
          const day = timeStamp[2]
          return (
              <div className="flex p" key={index}>
                <div className="p">
                <img className="convo-avatar" src="https://res.cloudinary.com/dzeqeo9b3/image/upload/v1501173171/avatar_default_wkpp05.png" alt="" />
                </div>
                <div className="p">
                  <div>
                    <strong>{this.props.users[message.sender_id].name}</strong> 
                    &nbsp;<small>{month + " " + day + ", " + year}</small>
                  </div>
                  <div className="message-font">
                    {message.body}
                  </div>
                </div>
              </div>
            )
          })}
          <div className="convo-message-bar-form p flex flex-center">
            <form onSubmit={this.sendMessage}>
              <input 
                onChange={this.handleChange} 
                className="convo-message-input p" 
                type="text" 
              />
              <input className="hidden" type="submit" />
            </form>
          </div>
        </div>
        {/* <div className="convo-side p">side bar</div> */}
      </div>
    );
  }
}

export default Message;