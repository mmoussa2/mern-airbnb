import React from "react";
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./gallery.css";


class Gallery extends React.Component {

  constructor(props) {
    super(props)
  
  this.state = {
    photoIndex: 0,
    isOpen: false
    }
  }

  componentDidMount(){
    this.props.fetchProperty(this.props.propertyId);
  }

//  backLink(e){
//    e.preventDefault();
//    this.props.history.push(`properties/${this.props.propertyId}`);
//  }

  renderImages = () => {
    let photoIndex = -1;
 
    return this.props.images.map((imageSrc, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    })
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer className="mt-5" >
        {/* <button onClick={this.backLink.bind(this)} > Back to Property</button> */}
     
        <div className="gallery">
          <MDBRow >
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={this.props.images[photoIndex]}
            nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
            prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
            imageTitle={photoIndex + 1 + "/" + this.props.images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.props.images.length
              })
            }
          />
        )}
     
      </MDBContainer >
    );
  }
}

export default Gallery;