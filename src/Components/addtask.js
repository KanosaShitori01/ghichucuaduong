import {useState} from 'react'
const AddTasks = ({onAdd}) => {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSaveTask = (e) => {
        e.preventDefault();
        if(!name){
            alert("Please add name!");
            return;
        }
        onAdd({name,note,reminder});

        setName('');
        setNote('');
        setReminder(false);
    }
    return (
    <form className="form-add" onSubmit={onSaveTask}>
        <div className="form-control">
                <label>Name: </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="form-control">
                <label>Note: </label>
                <input type="textarea" value={note} onChange={(e)=>setNote(e.target.value)}/>
        </div>
        <div className="form-checkbox">
                <label>Reminder: </label>
                <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.target.checked)}/>
        </div>
        <div className="form-submit">
            <input className="submit" type="submit" value="Save Task"/>
        </div>
    </form>);
};
export default AddTasks;
