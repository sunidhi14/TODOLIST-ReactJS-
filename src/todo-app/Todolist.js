import React from 'react';
import './todolist.css';
import '../App.css';

import TodoItems from './TodoItems';
import TodoEditBox from './TodoEditBox';

let iD= 0;
class Todolist extends React.Component {
    
    
    state = {
   todoItems:[],


        items : {
                id:'',
                taskTitle: 'Title1',
                taskDescription: 'Description of first task',
                taskDeadline: 'Today',
                
             },
             todoItemsDone:[],


             items : {
                     id:'',
                     taskTitle: 'Title1',
                     taskDescription: 'Description of first task',
                     taskDeadline: 'Today',
                     
                  },
             
        

        t :0 
    }

    render() {
        var todoJsx = this.state.todoItems.map(item => (
           
            <TodoItems  todoitems={this.state.todoItems} done = {this.done} edit={this.editTask} delete = {this.deleteTodoItem} id={item.id} taskTitle={item.taskTitle} taskDescription={item.taskDescription} taskDeadline={item.taskDeadline}/>
        ));
        
        return (
            <div id= "todo" className="todo-list" ref={el => this.div = el}  >
                
                <div id="todolist">
               <div id="title" > <input  type="text"  placeholder="Enter Title" id="mainTitle" ref={el => this.inputTitle = el} onChange={(e) => this.title(e)}></input></div><br></br>
                <div id="desc"><input type="text"  id="taskDesc"  placeholder="Enter description" ref={el => this.inputDesc = el} onChange={(e) => this.desc(e)}></input></div><br></br>
                <div id="deadline"><input type="date"   id="taskDeadline" ref={el => this.inputDeadline = el} onChange={(e) => this.deadline(e)}></input></div><br></br>
                <button id="add" onClick={() => this.addTodoItem()}>Add Items</button><br></br>
                <button id="add" onClick={() => this.show()}>Show</button><br></br>
                </div>
                
                <div id="list">
                   <div id="listt">
                      <h1 align="center">To-do List:</h1>
                      
                {todoJsx}
                </div>
                </div>
                { this.state.editVisible ? <TodoEditBox/> : "" }
            </div>
            
        );
    
}
  

    title(e){
        this.setState({
            taskTitle: e.target.value,
           
            
        })
    }
 
desc(e){
    this.setState({
        taskDescription: e.target.value
    })
}
deadline(e){
    this.setState({
        taskDeadline: e.target.value
    })
}

show(){
    console.log(this.state.todoItems)
}
    

    addTodoItem() {
      
        // spread operator to copy the array
        var newTodoItemsArray = [...this.state.todoItems];

        // push a new item to new array
        
        newTodoItemsArray.push({

            id:iD++,
            taskTitle: this.inputTitle.value,
            taskDescription:this.inputDesc.value,
            taskDeadline :   this.inputDeadline.value    
        });

        
       


        // all the objects that are assigned
        // should be assigned immutably
        this.setState({
            todoItems: newTodoItemsArray,
            
        })

        
        this.inputTitle.value = "";
        this.inputDesc.value="";
        this.inputDeadline.value="";
         

    
        
    }

    deleteTodoItem =(id)=> {

        var newArray = this.state.todoItems.filter(item => item.id != id)
        this.setState({
            todoItems: newArray
        });
    }


    

    editTask = (id) =>{
        
        this.state.todoItems.filter(item => item.id == id).map(items=>
  (
        this.inputTitle.value =  items.taskTitle,
        this.inputDesc.value= items.taskDescription,
        this.inputDeadline.value= items.taskDeadline
        )
        )


        this.deleteTodoItem(id)
       



    }

   

    
}
  


export default Todolist;
