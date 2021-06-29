import React, { Component } from 'react'

export class ReadMode extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </div>
        )
    }
}

export default ReadMode
