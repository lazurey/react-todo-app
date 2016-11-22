import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { load } from '../../actions/todos'
import { hideError } from '../../actions/errors'
import TodoList from '../../components/TodoList'
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
        <h2>Sample Todo List</h2>
        <ErrorMessage show={errors.show} message={errors.message} hideError={actions.hideError} />
        <TodoList todoList={todoList} />
      </div>
    )
  }
}

const TodoHomeActions = { load, hideError }
const mapState = state => ({
  todoList: state.todos,
  errors: state.errors
})
const mapAction = dispatch => ({
  actions: bindActionCreators(TodoHomeActions, dispatch)
})

export default connect(mapState, mapAction)(TodoHome)
