function Listitem(props)
{
    return (
        <div className="col-md-4 offset-md-4">
          <div style={{ margin: "10px" }} className="list-group-item">
          <button style={{ float: "right" }} onClick={()=>props.deleteItem(props.todoitem.id)}>
            <i className="fas fa-trash"></i>
        </button>
            <input
            defaultChecked={props.todoitem.completed}
            style={{ float: "left", marginTop: "5px" }}
            type="checkbox"
            onChange={()=>{props.toggleMarked(props.todoitem.id)}}
        ></input>
            <h6
            style={
              props.todoitem.completed
              ?{ textDecoration: "line-through", marginLeft: "20px" }
              : { marginLeft: "20px" }
          }>{props.todoitem.title}</h6>
          </div>
        </div>
      );
}

export default Listitem;