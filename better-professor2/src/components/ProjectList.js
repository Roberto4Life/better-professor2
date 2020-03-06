import React, {useState, useEffect} from 'react';
import AddProject from '../utils/AddProject';
import Projects from '../utils/Projects';
import { axiosWithAuth } from '../utils/axiosWtihAuth';
import { FormField, LoginForm } from './styled-components';

function ProjectList (props) {
    console.log(props)
    const [trigger, setTrigger] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axiosWithAuth().get(`students/${props.match.params.id}/projects`)
        .then(response =>{
            console.log('response', response)
            setProjects(response.data)
        })
        .catch(err =>{
            console.log('error: ', err)
        })
    },[trigger])

    return(
   
        <LoginForm>
        <FormField>
            <h1>My Projects</h1>
            <AddProject id={props.match.params.id} trigger={trigger} setTrigger={setTrigger}
                setProjects={setProjects}
            />
            <Projects projects={projects}/>
       
            </FormField>
    </LoginForm>
    )
}

export default ProjectList;