import React, {useState, useEffect} from 'react';
import AddReminder from '../utils/AddReminder';
import Reminders from '../utils/Reminders';
import { axiosWithAuth } from '../utils/axiosWtihAuth';
import { FormField, LoginForm } from './styled-components';


function ReminderList () {
    
    const [trigger, setTrigger] = useState(false);
    const [reminders, setReminders] = useState([]);
    const id = localStorage.getItem('professorID')
    useEffect(() => {
        axiosWithAuth().get(`/reminders`)
        .then(response =>{
            console.log('Reminder Created: ', response.data)
            setReminders(response.data)
        })
        .catch(err =>{
            console.log('error: ', err)
        })
    },[trigger])


    return(
        <LoginForm>
        <FormField>
 
            <h1>My Reminders</h1>
            <AddReminder trigger={trigger} setTrigger={setTrigger} />
            <Reminders reminders={reminders}/>
       
        </FormField>
    </LoginForm>
    )
}

export default ReminderList;