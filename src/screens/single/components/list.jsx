import React, { Component } from 'react'
import { slugify } from 'src/utils/functions'

class List extends Component {
  render () {
    if (!this.props.data) return false

    return (
      <ul className='list'>
        {this.props.data.map(item => {
          return <li key={slugify(item)}>{item}</li>
        })}
      </ul>
    )
  }
}

export default List
