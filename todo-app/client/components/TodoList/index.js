import React, { Component, PropTypes } from 'react'
import { List } from 'react-mdl'

import TodoItem from '../TodoItem'
import style from './style.css'

class TodoList extends Component {
  static propTypes = {
    todoList: PropTypes.array
  }

  static defaultProps = {
    todoList: []
  }

  _renderItems() {
    const { todoList } = this.props
    return todoList.map((item, i) => <TodoItem item={item} key={i} />)
  }

  render() {
    return (
      <List className={style.list}>
        { this._renderItems() }
      </List>
    )
  }
}

export default TodoList
