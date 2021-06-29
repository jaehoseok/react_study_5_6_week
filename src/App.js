import React, { Component } from 'react'

import Toc from './Toc'
import Control from './Control'

import ReadMode from './Component/ReadMode/ReadMode';
import CreateMode from './Component/CreateMode/CreateMode';
import UpdateMode from './Component/UpdateMode/UpdateMode';

export class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:1,
      contents:[
        {id:1, title:'1번글', desc:'1번 내용'},
        {id:2, title:'2번글', desc:'2번 내용'},
        {id:3, title:'3번글', desc:'3번 내용'}
      ]
    }
  }

  getReadContent(){
    for(let i=0 ; i<this.state.contents.length; i++){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id) {
        return data;
        break;
      }
    }
  }

  getContent(){
    var result = null;
    //READ
    if(this.state.mode === 'read') {
      var _Content = this.getReadContent();
      result = <ReadMode title={_Content.title} desc={_Content.desc}/>
    }
    //CREATE
    else if(this.state.mode === 'create'){
      result = <CreateMode 
        onSubmit={function(_title, _desc){
          var _Contents = this.state.contents.concat(
            {id:++this.max_content_id, title: _title, desc: _desc
          })

          this.setState({
            contents: _Contents,
            mode: 'read',
            selected_content_id: this.max_content_id
          })
        }.bind(this)}
      />
    }
    //UPDATE
    else if(this.state.mode === 'update'){
      var _Content = this.getReadContent()
      result = <UpdateMode data={_Content}
        onSubmit={function(_id, _title, _desc){
          var _Contents =  Array.from(this.state.contents)

          for(let i=0 ; i < _Contents.length ; i++){
            if(_Contents[i].id === _id){
              _Contents[i] = {id: _id, title: _title, desc: _desc}
              break;
            }
          }

          this.setState({
            contents: _Contents,
            mode: 'read',
            selected_content_id: _id
          })
        }.bind(this)}
      />
    }

    return result;
  }

  render() {
    return (
      <div>
        <Toc
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
          />
        <Control
          onChangeMode={function(_mode){
            if(_mode === 'delete'){
              var _Contents = Array.from(this.state.contents)
              for(let i=0 ; i<_Contents.length ; i++){
                if(_Contents[i].id === this.state.selected_content_id){
                  _Contents.splice(i,1)
                  break
                }
              }
              this.setState({
                mode: 'create',
                contents:_Contents
              })
            }
            else {
              this.setState({
                mode:_mode
              })
            }
          }.bind(this)}/>
        {this.getContent()}
      </div>
    )
  }
}

export default App
