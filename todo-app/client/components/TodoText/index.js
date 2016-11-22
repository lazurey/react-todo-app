import React, { Component, PropTypes } from 'react'
import { Textfield } from 'react-mdl'

class TodoText extends Component {
  static propTypes = {
    submit: PropTypes.func
  }

  constructor() {
    super()
    this._handleTyping = this._handleTyping.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
    this.state = {
      value: ''
    }
  }

  _handleTyping(event, a, b) {
    /* istanbul ignore next */
    this.setState({
      value: event.target.value
    })
  }

  _handleSubmit(event) {
    if (event.charCode === 13 && this.state.value.length > 4) {
      this.props.submit(this.state.value)
      this.setState({
        value: ''
      })
    }
  }

  render() {
    return (
      <Textfield
        onChange={this._handleTyping}
        pattern=".{5,}"
        error="Please type in a title"
        onKeyPress={this._handleSubmit}
        value={this.state.value}
        label="New todo item..."
      />
    )
  }
}

export default TodoText
