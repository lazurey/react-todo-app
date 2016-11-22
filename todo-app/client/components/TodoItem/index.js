import React, { Component, PropTypes } from 'react'
import { Button, ListItem, ListItemContent, ListItemAction } from 'react-mdl'

import EditTitle from '../EditTitle'

class TodoItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    actions: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      showEdit: false
    }
    this._showEdit = this._showEdit.bind(this)
    this._deleteItem = this._deleteItem.bind(this)
  }

  _showEdit() {
    this.setState({
      showEdit: true
    })
  }

  _deleteItem() {
    const { item, actions } = this.props
    actions.deleteItem(item.id)
  }

  render() {
    const { item, actions } = this.props
    return (
      <ListItem>
        <ListItemContent>
          <span style={{ display: this.state.showEdit ? 'none' : 'block' }}>{item.title}</span>
          <EditTitle show={this.state.showEdit} item={item} update={actions.updateTitle} />
        </ListItemContent>
        <ListItemAction style={{ minWidth: '100px', marginLeft: '0' }}>
          <Button onClick={this._showEdit} style={{ minWidth: '30px' }} accent>✍</Button>
          <Button onClick={this._deleteItem} style={{ minWidth: '30px' }} colored>✘</Button>
        </ListItemAction>
      </ListItem>
    )
  }
}

export default TodoItem
