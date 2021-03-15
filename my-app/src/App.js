import './App.css';
import React from 'react'
import CreateReminder from './createReminder'
import useReminders from './useReminder'
import Timer from './timer'

const App = () => {
  const [reminders, addReminder, setReminderCompleted] = useReminders() 
  return (
    <div className="App">
      <div className="reminder-container">
        <h2>Your Reminders</h2>
        <hr />
        {reminders.map(reminder => (
          <div key={reminder.id} className="reminder"> 
          <p>{reminder.label}</p>
          <p>{reminder.context}</p>
          <input type="checkbox"
          checked = {reminder.completed}
          onChange={() => setReminderCompleted(reminder.id, !reminder.completed)}
          />
          </div>
        ))}
      </div>
      <CreateReminder createNewReminder={addReminder}/>
      <Timer />
      <div className="text-center">
      <div>
 </div>  
      <button type="button" onClick={() => localStorage.clear()} className="btn btn-primary">Clear All</button>
    </div>
    </div>
  );
}

export default App;
