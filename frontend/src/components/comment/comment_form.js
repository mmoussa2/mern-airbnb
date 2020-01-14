import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property_id: this.props.match.params.propertyId,
      user_id: props.currentUser.id,
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const propertyId = parseInt(this.props.match.params.propertyId);
    const comment = Object.assign({}, this.state, {
      propertyId: propertyId
    });
    this.props.createComment(comment).then((result)=>{

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
    //  if (!this.props.errors) return null;
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
          
          <button>
            Submit
          </button>
        </form>
        {this.renderErrors()} 
      </div>
    );
  }
}

export default withRouter(CommentForm);