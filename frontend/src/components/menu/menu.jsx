import React from 'react';
import MenuOptions from './menu_options';
import MenuButton from './menu_button';
import './menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
    this.setState({ open: false })
  }

  handleClick(e) {
    if (this.node.contains(e.target)){
      this.setState({ open: !this.state.open });
    }
    else {
      this.setState({ open: false })
    }
  }

  render() {
    if (this.state.open){
      return (
        <div className="menu" ref={node => this.node = node}>
          <MenuButton
            open={this.state.open}
            handleClick={this.handleClick}
          />
          <MenuOptions />
        </div>
      );
    }
    else {
      return (
        <div className="menu" ref={node => (this.node = node)}>
          <MenuButton open={this.state.open} handleClick={this.handleClick} />
        </div>
      );
    }
  }
}

export default Menu;