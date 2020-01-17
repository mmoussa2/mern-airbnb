import React from 'react';
import { withRouter } from 'react-router-dom';

  // import Modal from '../reservations/modal/modal4';
import ReactModal from '../reservations/modal/modal3';



class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // property_id: this.props.match.params.propertyId,
      property_id: this.props.match.params.propertyId,
      user_id: props.currentUser.id,
      comment: '',

      //  isOpen: false 
        showModal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);

    // this.toggleModal = this.toggleModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // toggleModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const propertyId = parseInt(this.props.match.params.propertyId);
    // const comment = Object.assign({}, this.state, {
    //   propertyId: propertyId
    // });
    const cmt = Object.assign({}, this.state)
    this.props.createComment(cmt).then((result)=>{

      this.clearData();

    }).catch((result) => {

    });
    // this.navigateToImageShow();
  }

  clearData() {
    this.setState({
      comment: ''
    })
  }

  renderErrors() {
     if (!this.props.errors) return [];
    return (
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
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
          <br />
          
          {/* <button 
          // onClick={this.toggleModal}
            onClick={this.handleOpenModal}
          >
            Submit
          </button> */}
          <ReactModal
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            errors={this.props.errors}
        >
            {/* <p>Modal text!</p>
            <button onClick={this.handleCloseModal}>Submit</button> */}
          </ReactModal>
        </form>
        {/* {this.renderErrors()}  */}

          <div>
           {/* <Modal show={this.state.isOpen}
             onClose={this.toggleModal}>
             Here's some content for the modal
          </Modal> */}

       
         </div>
      </div>
    );
  }
}

export default withRouter(CommentForm);