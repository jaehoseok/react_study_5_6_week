import React, { Component } from 'react'

export class CreateMode extends Component {
    render() {
        return (
            <div>
                <h2>Create</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                    );
                }.bind(this)}
                >
                    <p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="제목"
                        />
                    </p>

                    <p>
                        <textarea 
                            name="desc" 
                            placeholder="내용"
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

export default CreateMode
