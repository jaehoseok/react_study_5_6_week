import React, { Component } from 'react'

export class UpdateMode extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this)
    }

    inputFormHandler(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Update</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                    this.state.id,
                    this.state.title,
                    this.state.desc
                    );
                }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}/>
                    <p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="제목"
                            value={this.state.title}
                            onChange={this.inputFormHandler}
                        />
                    </p>

                    <p>
                        <textarea 
                            name="desc" 
                            placeholder="내용"
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        />
                    </p>

                    <p>
                        <input 
                            type="submit"
                        />
                    </p>

                </form>
            </div>
        )
    }
}

export default UpdateMode
