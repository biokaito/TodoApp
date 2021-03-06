import React, {Component} from 'react';
import './App.css';
import TodoItem from './Component/TodoItem';
import Tick from './img/tick.svg'

class App extends Component {
  constructor(){
    super();
    this.state ={    
      todoItems : [
        {title: 'Go Shopping', isComplete: true},
        {title: 'Go Fishing', isComplete: true},
        {title: 'Love you more', isComplete: false}
      ]
    }
  }

  onItemClicked(item){
    //console.log(item)
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState(
        {
          todoItems: [
            ...todoItems.slice(0,index),
            {
              ...item,
              isComplete : !isComplete
            },
            ...todoItems.slice(index+1),
          ]
        }
      );
    }
  }

  onKeyUp(event){
    const text = event.target.value;
    if(!text || text === ''){
      return;
    }
    text.trim(); //trim() xóa đi các dấu cách ở đầu và cuối
  }

  render(){
    const {todoItems } = this.state;
    if(todoItems.length){
        return (
          <div className="App"> 
          <div className="header"> 
            <img 
            src={Tick} 
            width={32} 
            height={32}            
            ></img>
            <input 
            type="text" 
            placeholder="Add a new item"
            onKeyUp={this.onKeyUp}
            ></input>
          </div>       
            {
             todoItems.length && todoItems.map((item,index) =>
              <TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemClicked(item)} 
              />
             )
            }
          </div>
          
        );
      };
    }
}

export default App;
