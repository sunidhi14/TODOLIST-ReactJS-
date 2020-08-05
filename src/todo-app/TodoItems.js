import React from 'react';
import './todolist.css';
import Todolist from './Todolist';


        
class TodoItems extends React.Component {
    state= {
        backgroundC:"white",
        completed:''
      }
    render() {
        return (
            
            <div className="todo-item"  style={{backgroundColor: this.state.backgroundC}}>
                 {this.state.completed}
                <div className="todo-title">
                {this.props.taskTitle}
                </div>
                <div className="todo-description">
                    {this.props.taskDescription}
                </div>
                <div  className="todo-deadline">
                    {this.props.taskDeadline}
                </div>
               
                <div className="delete"><a href="#"  ref={el => this.delete = el} className="delete"  onClick={() => this.deleteItem(this.props.id)}><i class="fa fas fa-trash"></i>Delete</a>&nbsp;&nbsp;&nbsp;
                    <a  href='#' className="edit" ref={el => this.edit = el} onClick={() => this.editTask(this.props.id)}><i class="fa fas fa-edit" ></i>Edit</a>&nbsp;&nbsp;&nbsp;
                    <a  href='#' className="completed" onClick={() => this.done(this.props.id)} ><i class="fa fas fa-check-circle"></i>Done</a></div>
            </div>
            

        );
    
        
    
}
   
    

deleteItem(id){
    this.props.delete(id);
    this.setState({
        backgroundC: 'white',
        completed:''
    })
    
}

editTask(id){
    console.log(id)
    this.props.edit(id);
    this.setState({
        backgroundC: 'white',
        completed:''
    })
}

done(id){
       
    console.log(this.props.todoitems[id])
        this.setState({
            backgroundC: '#b2ff66',
            completed:'TASK COMPLETED:'
        })

      

}
   
}

export default TodoItems;
