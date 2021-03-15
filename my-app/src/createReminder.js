import React, {useState} from 'react';

const CreateReminder = ({createNewReminder}) => {
  const [label, setLabel] = useState('');
  const [context, setContext] = useState('');
  const [time, setTime] = useState('');
 
  
  function handleSubmit(event) {
    event.preventDefault();
    label.length && context.length !== 0 
    ? createNewReminder(label, context) 
    : alert('Please enter a URL and description')
    setLabel("");
    setContext("");
  }
  
 
  return(
    <div className="create-reminder-form">
      <label>Enter your URL here</label>
      <input placeholder="Enter URL" onChange={event => setLabel(event.target.value)} value={label} /><br></br>
      <label>Add some context?</label>
      <input placeholder="What is this URL?" onChange={event => setContext(event.target.value)} value={context} />
      <div className="list tab" >
        <label className="item item-input">
          <span className="input-label">Set an alert!</span>
          <input type="time" id="f-minutes" onChange={event => setTime(event.target.value)} value={time}>
        </input>
        </label>
        </div>
      <button type="submit" onClick={handleSubmit}>Save URL</button>
    </div>
  )
  
}


export default CreateReminder;