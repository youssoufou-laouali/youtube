import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'

export default class SearchBar extends Component {
    state={
        searchTerm: ''
    }
    input =React.createRef()
handleChange= (e)=>{
    this.setState({
        searchTerm: e.target.value
    })
}

handleSubmit= (e) => {
    e.preventDefault()
    const { searchTerm }= this.state
    const { onFormSubmit } =this.props
    onFormSubmit(searchTerm)
    this.input.current.children[1].children[0].value=''

}

    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField ref={this.input} fullWidth label="..." onChange={this.handleChange} />
                </form>
            </Paper>)
    }
}
