import {Route, Switch} from 'react-router-dom'
import Projects from './screens/Projects'
import Resume from './screens/Resume' 
import Skills from './screens/Skills'
import Work from './screens/Work'
import Home from './screens/Home'
import Bio from './screens/Bio'
import NavBar from './screens/NavBar'

import './App.css';

function App() {
  return (
    <div className="App">
       <NavBar />


       <Switch>
        <Route path ='/skills' component = {Skills} />
        <Route path ='/projects' component = {Projects} />
        <Route path ='/work' component = {Work} />
        <Route path ='/resume' component = {Resume} />
        <Route path = '/bio' component = {Bio} />
        <Route path = '/' component = {Home} />
      </Switch>
 
    </div>
  );
}

export default App;
