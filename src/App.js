import React, {Component} from 'react';
import CourseApp from './component/CourseApp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
        <div className="container">
          <CourseApp/>
        </div>
    )
  }
}

export default App;
