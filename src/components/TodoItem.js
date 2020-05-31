import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        // console.log(this.props)
        return{
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            backgroundColor: "#e1ede5"
        }
    }

    

    render() {

        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                <input style={chkStyle} type = "checkbox" onChange = {this.props.markComplete.bind(this, id)}/>
                { title }
                <button style={btnStyle} onClick = {this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}
//setting properties type
TodoItem.propTypes = { 
    todo: PropTypes.object.isRequired
}

const chkStyle = {
    marginRight: "10px"
}

const btnStyle = {
    backgroundColor: "#96140f",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    float: "right",
    borderRadius: "50%",
    cursor: "pointer"
}



// alternate vay
// const setType = {
//     backgroundColor: "#5f4f2f",
// }


export default TodoItem
