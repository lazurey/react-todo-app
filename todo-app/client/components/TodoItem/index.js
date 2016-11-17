import React, { Component, PropTypes } from 'react'
import { Button, ListItem, ListItemContent, ListItemAction } from 'react-mdl'

class TodoItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const { item } = this.props
    return (
      <ListItem style={{borderBottom: '1px solid rgba(0, 0, 0, 0.3)'}}>
        <ListItemContent>{ item.title }</ListItemContent>
        <ListItemAction>
          <Button accent>Update</Button>
          <Button colored>Done</Button>
        </ListItemAction>
      </ListItem>
    )
  }
}

export default TodoItem
