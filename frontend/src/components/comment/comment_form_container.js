import {connect} from 'react-redux';
import { createComment } from '../../actions/comments_actions'
import CommentForm from './comment_form';


const mapStateToProps = (state) => {
 
  return {
    currentUser: state.session.user,
    errors: state.errors.comments
  };
};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);