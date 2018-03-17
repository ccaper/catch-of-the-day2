import React from "react";
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object
  }

  goToStore = (event) => {
    event.preventDefault();
    const { value:storeName } = this.myInput.value;
    console.log(storeName);
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="Submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
