import Listitem from "./List";

function Listcontainer(props) {
    return <div className="col-md-12">
      {props.todos.map((todo)=>(
              <Listitem
              key={todo.id} 
              todoitem={todo} 
              toggleMarked={props.toggleMark}
              deleteItem={props.deleteItem}/>
      ))}
    </div>;
}
export default Listcontainer;
