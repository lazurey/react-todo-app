import React, { Component, PropTypes } from 'react'
import { Textfield } from 'react-mdl'

class EditTitle extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    show: PropTypes.bool,
    update: PropTypes.func
  }

  constructor() {
    super()
    this._handleTyping = this._handleTyping.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.item.title
    })
  }

  _handleTyping(event, a, b) {
    /* istanbul ignore next */
    this.setState({
      value: event.target.value
    })
  }

  _handleSubmit(event) {
    if (event.charCode === 13 && this.state.value.length > 4) {
      this.props.update(this.props.item.id, this.state.value)
    }
  }

  render() {
    return (
      <Textfield
        style={{ width: '280px', display: this.props.show ? 'block' : 'none' }}
        onChange={this._handleTyping}
        pattern=".{5,}"
        error="Please type in a title"
        onKeyPress={this._handleSubmit}
        value={this.state.value}
        label="Update this title"
      />
    )
  }
}

export default EditTitle
