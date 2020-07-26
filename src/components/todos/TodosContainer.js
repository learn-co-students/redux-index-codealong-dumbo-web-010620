import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => {
        return this.props.todos.map((todo, id) =>
        <Todo key={id} text={todo} />)
    }
    
    render() {
        console.log("meh")
        return (
            <div>
                {this.renderTodos()}
                {/* ^ forgot to invoke with ()! */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(TodosContainer)