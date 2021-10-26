import React from 'react';

class ListForm extends React.Component {

    constructor(){
        super();
        this.state = {
            input:""
        }
    }
    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
        this.setState({
            ...this.state,
            input: ''
        });
    }
    handleClear = (e) => {
        e.preventDefault();
        this.props.clearItems();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}> Add Task:
                <input onChange={this.handleChanges} type="text" name="item" placeholder="Add To-Do Item"/>
                <button>Add</button>
            </form>
        )
    }
}
export default ListForm;