  
import React, { Component } from 'react'

class SushiMoney extends Component {

    state = {
        moMoney: 0
    }

    handleChange = (event) => {
        this.setState({
            moMoney: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMoney(parseInt(this.state.moMoney))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="number" name="moMoney" placeholder="Amout" value={this.state.moMoney} onChange={this.handleChange} />
                <input type="submit"/>
            </form>
        )
    }
}

export default SushiMoney