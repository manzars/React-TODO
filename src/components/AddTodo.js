import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style = {{ display: 'flex' }}>
                <input
                    type="text"
                    placeholder = "Add ToDo..."
                    style = {{ flex: "10", padding: "5px" }}
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className = "btn"
                    style =  {{ flex: "1" }}
                />
            </form>
        )
    }
}

export default AddTodo
