import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Сalendar from './components/Сalendar/Сalendar'
import Menu from './components/Menu/Menu'
import Profile from './components/Profile/Profile'
import Records from './components/Records/Records'
import MyRecords from './components/Records/MyRecords/MyRecords'
import ElectronicCard from './components/ElectronicCard/ElectronicCard'


function App() {
  return (
    <React.Fragment>
      <div className='flex-container'>
        <Menu/>
        <div className='container'>
          {/* <Profile/>
          <Records/>
          <ElectronicCard/> */}
          <Route path='/' exact  component={Profile}  />
          <Route path='/' exact  component={Records}  />
          <Route path='/' exact  component={ElectronicCard}  />
          <Route path='/records' exact  component={Profile}  />
          <div className='myRecord-container'>
            <Route path='/records' exact  component={MyRecords}  />
            <Route path='/records' exact  component={Сalendar}  />
          </div>
          
        </div>   
      </div>
      
      </React.Fragment>
  );
}

export default App;
