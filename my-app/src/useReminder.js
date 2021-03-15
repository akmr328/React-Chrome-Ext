import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const getReminders = () => {
  const reminders = window.localStorage.getItem('reminders')
  
  if(!reminders){
    return []
  }
  return JSON.parse(reminders)
}

const useReminders = () => {
  const [reminders, setReminders] = useState(getReminders());
 
  const updateReminders = (newReminders) => {
    const stringifiedReminders = JSON.stringify(newReminders);
    window.localStorage.setItem('reminders', stringifiedReminders);
    setReminders(newReminders)
  }
  
  const setReminderCompleted = (id, completed) => {
    const reminderIndx = reminders.findIndex(reminder => reminder.id === id);
    const newReminders = [...reminders];
    
    newReminders[reminderIndx].completed = completed;
    
    updateReminders(newReminders);
  };

  
  const addReminder = (label, context, time) => {
    const newReminder = { label, context, completed: false, id: uuidv4() };
    updateReminders([...reminders, newReminder]);
  }
  return [reminders, addReminder, setReminderCompleted];
}

export default useReminders;