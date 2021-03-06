import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static get propTypes() {
    return {
      action: PropTypes.func,
      variant: PropTypes.string,
      color: PropTypes.string,
    };
  }

  static defaultProps = {
    text: 'Add new item',
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1),
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  }

  handleCancel = () => {
    confirm('Not adding anything?'),
    this.setState({
      value: '',
      visibleButtons: false,
    });
  }

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK} variant={this.props.variant + this.props.color}>Ok</Button>
          <Button onClick={this.handleCancel} variant='danger small' >Cancel</Button>
        </div>
      </div>
    );
  }
}

export default Creator;
