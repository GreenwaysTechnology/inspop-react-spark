import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import produce from 'immer';

class TodoApp extends Component {
    state = {
        items: [],
        text: ''
    }

    handleChange = evt => {
        this.setState(prvState => {
            return {
                items: prvState.items,
                text: evt.target.value
            }
        })
    }

    handleSubmit = evt => {
        //stop firing default event submission
        evt.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Math.random()
        }
        this.setState(preState => {
            return { ...preState, items: preState.items.concat(newItem), text: '' }
        })
    }

    render() {
        return <>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">What needs to be done?</label>
                <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
                <button>Add #{this.state.items.length + 1}</button>
            </form>
        </>
    }
}
const TodoList = props => {
    return <ul>
        {props.items.map(item => {
            return <li key={item.id}>{item.text}</li>
        })}
    </ul>
}

const App = props => <div>
    <TodoApp />
</div>;
ReactDOM.render(<App />, document.getElementById('root'))