import React from "react"

class Item extends React.Component {
    state = {
        edit: false,
        text: this.props.todo,
    }
    handleComplete = (e) => {
        this.props.handleComplete(this.props.id);
    }
    handleDelete = (e) => {
        e.stopPropagation();
        this.props.handleDelete(this.props.id);
    }
    handleUpdate = () => {
        this.props.handleUpdate(this.props.id, this.state.text);
    }
    toggleUpdate = (e) => {
        e.stopPropagation();
        this.setState({edit: !this.state.edit});
    }
    handleChange = (e) => {
         if(e.key === 'Enter') {
             this.setState({edit: false});
             this.handleUpdate();
         }
         this.setState({text: e.target.value});
    }
    render() {
        if (!this.state.edit) {
            return (
                <li className={(this.props.completed) ? "completed" : null} onClick={this.handleComplete}>
                    {this.props.todo}
                    <span>
                        <span className="edit" onClick={this.toggleUpdate}><i className="fa fa-edit" style={{ 'fontSize': '20px' }}></i></span>
                        <span className="close" onClick={this.handleDelete}><i className="fa fa-times" style={{ 'fontSize': '20px' }}></i></span>
                    </span>
                </li>
            );
        }
        return (
            <li >
                <input type="text" className="edit-input" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleChange}/>
                <span onClick={e=>e.stopPropagation()}>
                    <span className="edit" onClick={this.toggleUpdate}><i className="fa fa-edit" style={{ 'fontSize': '20px' }}></i></span>
                </span>
            </li>
        );
    }

}

export default Item