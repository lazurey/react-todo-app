import React, { PropTypes } from 'react'
import { Button, ListItem, ListItemContent, ListItemAction } from 'react-mdl'

const TodoItem = (props) => {
  const { item } = props
  return (
    <ListItem style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
      <ListItemContent>{item.title}</ListItemContent>
      <ListItemAction>
        <Button accent>Update</Button>
        <Button colored>Done</Button>
      </ListItemAction>
    </ListItem>
  )
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default TodoItem
