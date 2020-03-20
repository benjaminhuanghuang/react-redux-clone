import React, { Component } from 'react'
import TodoApp from '../ToDoApp'


interface TodoItemProps{

}


export default class TodoItem extends Component {
  state={
    showTagSelect: false
  }

  taggleTags=()=>{
    this.setState({
      showTagSelect : !this.state.showTagSelect
    })
  }

  onSelectTag = (e:ChangeEvent<HTMLSelectElement)=>{
    const tag = e.taget.value;
    if(tag){
      this.props.onAddTag(tag)
    }
    this.toggleTags(); 
  }
  render() {
    
     const todo = this.props.todo
     const phase = Todo.phases[TodoItem.phases.length-1]
     const options = [<option value="">---</option>]

     for(const tag of BUILTIN_TAGS){
       options.push(<option value={tag}>{tag}</option>)
     }

    const tags=[]
    for(const tag of Array.from(todo.tags)){
      tags.push(
        <span className="todo-tag">
          {tag}
          <button conClick={() => this.props.onRemoveTag(tag)}> 
            X
          </button>
        </span>
      )
    }
     return (
       <tr>
        <td>{todo.created.toISOString()}</td>
        <td>{todo.name}</td>
        <td>
        {tags}
        {this.state.showTagSelect?(
          <label> Select Tag: <select onChange={this.onSelectTag}>{options}</select></label>
        ):(
          <button onClick={this.toggleTags}>+</button>
        )}
        </td>
        <td>{phase.status}</td>
        <td><button onClick={this.props.onRemove}>Delete</button></td>
       </tr>
    )
  }
}
