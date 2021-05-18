import React, { Component } from 'react'
import './App.css';
import ChooseSport from './components/chooseSport';
import Navbar from './components/navbar';
import ScheduleForm from './components/scheduleForm';
import axios from 'axios';

// Will contain the list off all events grabbed from the backend API
schedule = [];

class App extends Component {
  return (
    // Parent div for the components
    render = () => {
      <div id="parent">
      <Navbar />
      <ChooseSport />
      <p>I do not know how to use React routing, nor is it my job to do so, so here is the other component that was finished, simply so that everything that was actually finished on the front end is shown off -Dan</p>
      <ScheduleForm />
    </div>
    }
  )
}

componentDidMount = () => {
  this.refreshSchedule();
}

// Hits the Django backend API to get the updated Event data
refreshSchedule = () => {
  axios
  .get("http://localhost:8000/api/schedule/")
  .then(res => this.state({ schedule: res.data }))
  .catch(err => console.log(err))
}

export default App;
