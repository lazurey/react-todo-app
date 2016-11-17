import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { load } from '../../actions/todos'
import TodoList from '../../components/TodoList'
import style from './style.css'

class TodoHome extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    todoList: PropTypes.array
  }

  componentDidMount() {
    this.props.actions.load()
  }

  render() {
    const { todoList } = this.props
    return (
      <div className={style.main}>
        <h2>Sample Todo List</h2>
        <TodoList todoList={ todoList } />
      </div>
    )
  }
}

const TodoHomeActions = { load }
const mapState = (state) => ({
  todoList: state.todos
})
const mapAction = (dispatch) => ({
  actions: bindActionCreators(TodoHomeActions, dispatch)
})

export default connect(mapState, mapAction)(TodoHome)
