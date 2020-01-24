import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../components/reservations/reservation.css'

import ReactModal from '../reservations/modal/modal';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      property_id: this.props.match.params.propertyId,
      user_id: props.currentUser.id,
      comment: '',
      show: false

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal(){
     this.setState({show : !this.state.show})
  }

  handleSubmit(e) {
    
    e.preventDefault();
    const cmt = Object.assign({}, this.state);
    
    this.props.createComment(cmt).then((result)=>{
      
    this.clearData();
    }).catch((result) => {});
    // this.navigateToImageShow();
  }

  clearData() {
    this.setState({
      comment: ''
    })
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

 
  render() {
    
    return (
      <div className="review" >

        <form onSubmit={this.handleSubmit}>
          <h2>
            Write a Comment
         </h2>
          <br></br>
          <textarea
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.update("comment")}
          />
          <br></br>
          <br></br>
         
          <button onClick={this.showModal} className="btnSubmit" >Submit</button>
          
           <ReactModal 
           show={this.state.show} 
           onClose={this.showModal} 
           errors={this.props.errors} /> 
         
        </form>
      </div>
    );
  }
}


export default withRouter(CommentForm);









