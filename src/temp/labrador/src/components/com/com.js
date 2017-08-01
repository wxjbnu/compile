import { Component, PropTypes } from 'labrador-immutable';
import immutable from 'seamless-immutable';
//import { connect } from 'labrador-redux';

const { any } = PropTypes;

class com extends Component {
  static propTypes = {
    foo: any
  };

  static defaultProps = {
    foo: 'bar'
  };

  constructor(props) {
    super(props);
    this.state = immutable({});
  }

  children() {
    return {};
  }

  // onLoad() {
  // }

  // onReady() {
  // }

  // onUpdate() {
  // }

  // onShow() {
  // }

  // onHide() {
  // }

  // onUnload() {
  // }

}

export default com;

// export default connect(
//   (state)=>({})
// )(com);
