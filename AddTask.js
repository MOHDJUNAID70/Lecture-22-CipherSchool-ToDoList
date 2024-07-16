const AddTask =()=>{
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
    <div className="ui form">
    <form>
    <div className="field">
        <label>Title</label>
        <input type="text" placeholder="Task Tilte"
        name="title"/>
    </div>
    <div className="field">
        <label>Description</label>
        <textarea rows="3" placeholder="Task Description" 
        name="description"
        />
    </div> 
    <button class="ui primary button">
        Submit
    </button> 
    </form>
    </div>
    </>
    )
}


export default AddTask;