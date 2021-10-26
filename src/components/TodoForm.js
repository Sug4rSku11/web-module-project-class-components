import React from 'react';

class ListForm extends React.Component {

    constructor(){
        super();
        this.state = {
            input: ""
        }
    }
    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    };
    handleClick = e => {
        e.preventDefault();
        this.props.handleAddItem(this.state.input);
        this.setState({
            input: ''
        });
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.handleAddItem(this.state.input);
    //     this.setState({
    //         ...this.state,
    //         input: ''
    //     });
    // }
    // handleClear = (e) => {
    //     e.preventDefault();
    //     this.props.clearItems();
    // }
    render() {
        return (
            <form onSubmit={this.handleSubmit}> Add Task:
                <input onChange={this.handleChanges} 
                type="text" 
                name="item" 
                placeholder="Add To-Do Item"
                value={this.state.input}/>
                <button onClick={this.handleClick}>Add</button>
            </form>
        )
    }
}
export default ListForm;