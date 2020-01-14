import React from 'react';
import NavBar from '../nav/navbar_container'
import {Route} from 'react-router-dom'
import MessagesContainer from '../message/messages_container'
import ConversationContainer from '../message/conversation_container'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <Route path="/" component={NavBar} />
        <Route exact path="/messages" component={MessagesContainer} />
        <Route exact path="/messages/*" component={ConversationContainer} />
      </div>
    );
  }
}

export default MainPage;