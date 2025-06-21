
function ToDoList(){
const toDo = ["Learn React",
"Build a project", "Read documentation"];
return(
<ul>
{toDo.map((item, index)=>{
return <li key={index}>{item}</li>
})}
</ul>
)
}
export default ToDoList;