import React, { Component } from 'react'

import TodoItem from '../../components/TodoItem'

class TodoHome extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <TodoItem />
      </div>
    )
  }
}

export default TodoHome
