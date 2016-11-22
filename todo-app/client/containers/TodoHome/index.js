import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { load, addTodo } from '../../actions/todos'
import { updateTitle, deleteItem } from '../../actions/todo'
import { hideError } from '../../actions/errors'
import TodoList from '../../components/TodoList'
import TodoText from '../../components/TodoText'
import ErrorMessage from '../../components/ErrorMessage'
import style from './style.css'

class TodoHome extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    todoList: PropTypes.array,
    errors: PropTypes.object
  }

  componentDidMount() {
    this.props.actions.load()
  }

  render() {
    const { todoList, errors, actions } = this.props
    return (
      <div className={style.main}>
        <h2>My Todo List</h2>
        <TodoText submit={actions.addTodo} />
        <ErrorMessage show={errors.show} message={errors.message} hideError={actions.hideError} />
        <TodoList todoList={todoList} actions={actions} />
      </div>
    )
  }
}

const TodoHomeActions = { load, hideError, addTodo, updateTitle, deleteItem }
const mapState = state => ({
  todoList: state.todos,
  errors: state.errors
})
const mapAction = dispatch => ({
  actions: bindActionCreators(TodoHomeActions, dispatch)
})

export default connect(mapState, mapAction)(TodoHome)
