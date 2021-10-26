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
    }
    render() {
        return (
            <form onsubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type="text" name="item" />
                <button>Add</button>
            </form>
        )
    }
}
export default ListForm;