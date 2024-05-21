import React from 'react';
import { useState } from 'react';

export default function Todo1() {
    const [item,setItem]=useState("")
    const [itemArray,setItemArray]=useState([])
     const [newid,setId]=useState(null);
     const [toggle,setToggle]=useState(true);


    const handleInput = (e)=>{
        let val = e.target.value;
        setItem(val);
    }

    const handleClick = ()=>{
        if(item ===""){
          return;  
        }
        else if(!toggle){
      //     let newItemArray = [...itemArray]
      //     for (let i =0;i<newItemArray.length; i++){
      //       if(newItemArray[i].id === newid){
      //         newItemArray[i] = {id: newid, value: item}
      //       }
      //     }
      //  setItemArray(newItemArray);
         setItemArray(itemArray.map((ele)=>{
          if(ele.id === newid){
            return {
              ...itemArray, value:item
            }
           
          }
           return ele;

         }))
         setToggle(true)
        }else {
          setItemArray([
            ...itemArray, {
              id: Math.random()*10,
              value: item
            }
          ])
        }
        
      
      
        // setItemArray.value([...itemArray, item])
        // setItemArray.id(Math.random()*10)
        
    setItem("");
    }



      const deleteTodo=(index)=>{

        const updatedTasks = itemArray.filter(task => task.id !== index);

        setItemArray(updatedTasks);
      } 


      const handleEdit =(obj)=>{
        setItem(obj.value);
        setId(obj.id)
        setToggle(false)
      }  
        
    
  return (
    <div>

<input value={item} type="text" placeholder='Add anything' onChange={handleInput}></input>
        <button type='button' onClick={handleClick}>Add Item</button>
        <ul>
          
           
        { itemArray?.map((todo,index) =>{
           return(
            
            <>
           
         <li key={todo.id}>

         {todo.value}
         <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
         <button onClick={()=>handleEdit(todo)}>edit</button>
        </li>
        </>
           )
        }
        )
        }
              
      
      </ul>
</div>
  );
}
