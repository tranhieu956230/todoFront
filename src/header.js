import React from "react";

class Header extends React.Component {
    state = {
        text: "",
    }
    handleChange = (e) => {
        if (e.key === 'Enter') this.handleSubmit();
        else this.setState({ text: e.target.value });
    }
    handleSubmit = () => {
        this.props.handleSubmit(this.state.text);
        this.setState({text: ""});
    }
    render() {
        return (
            <header>
                <h1>Todo</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Add some thing" onKeyPress={this.handleChange} value={this.state.text} onChange={this.handleChange}/>
                    <button type="button" onClick={this.handleSubmit}>Add</button>
                </form>
            </header>
        )
    }
}

export default Header