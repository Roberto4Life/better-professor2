import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/Signup';
import './App.css';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import ProjectList from './components/ProjectList';
import ReminderList from './components/ReminderList';
import Projects from './utils/Projects';
import {Nav, NavLinksContainer} from './components/styled-components';
import './components/styles.css';



function App() {
  return (
    <div>
    <Router>
      <div className='App'>
        <Header />
   
        <Nav>
          <NavLinksContainer>
            <Link className='link' to={`/Signup`}>SignUp</Link>
            <Link className='link' to={`/dashboard`} >Dashboard</Link>
            <Link className="link" to={`/studentlist`}>Student List</Link>
            <Link className="link" to={`/reminderlist`}>My Reminders</Link>
          </NavLinksContainer>
        </Nav>
          {/* <Navigation /> */}
        {/* <Dashboard /> */}
        </div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute path='/dashboard' component={Dashboard}/>
          <PrivateRoute path='/studentlist' component={StudentList}/>
          <PrivateRoute path='/projectlist/:id' component={ProjectList}/>
          <PrivateRoute path='/reminderlist' component={ReminderList}/>
        </Switch>

    </Router>
    </div>
  );
}

export default App;