import {  useState } from "react"; 
function Counter(){
    //let x=0;
    const [isEditing, setIsediting]= useState(false);
    const [x,setX]= useState(0);
    const [todos,setTodos]=useState(['todo1','todo2']);
    const [y,setY]= useState(0);
    return(
        <>
        Count:x {x} is {(x%2===0)? 'Even': 'Odd'}
        <button onClick={()=>setX(x+1)}>Increment</button>
        <button onClick={()=>setX(x-1)}>Decrement</button>
        
            <ul>
                {todos.map((todo) =><li>{todo}</li>)}
                <button onClick={()=>setTodos([...todos,'another one'])}>press</button>
            </ul>
        
        {
           (isEditing)?<input/>:     <p>Some todo list</p>
        }
            <br></br>
            <button onClick={()=>setIsediting(!isEditing)}>Click</button>
        <br>
        </br>
        Count:y {y}
        <button onClick={()=>setY(y+1)}>Increment</button>
        <button onClick={()=>setY(y-1)}>Decrement</button>
        </>
    )
}


export default Counter;
