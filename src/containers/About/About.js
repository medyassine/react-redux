import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  state = {
    show: false
  }

  handleToggle = () => this.setState({show: !this.state.show});

  render() {
    const {show} = this.state;
    const image = require('./medyassine.jpeg');
    return (
      <div className="container">
        <h1>About Us</h1>
        <Helmet title="About"/>

        <p>This project was created by Mohamed YASSINE</p>

        <h3>Image</h3>

        <p>

          <button className={'btn btn-' + (show ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggle}>
            {show ? 'No! Take it away!' : 'Show iamge'}</button>
        </p>

        {show && <div><img src={image} width={210} height={310}/></div>}
      </div>
    );
  }
}
