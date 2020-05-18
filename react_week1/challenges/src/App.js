import React from 'react';
import './App.css';
import Medium from './moreChallenges/Medium'

class App extends React.Component {

  // Easy Challenge V
  constructor(props) {
    super(props);
    this.state = {
      person: {}
    }
  }

  // Very Easy Challenge V
  render(){
    return(
      <div className="veryEasy">
        <h1 className="name">Nicolas Conaway</h1>
        <p className="number">704-604-3099</p>
        <p className="dateOfBirth">09/07/2000</p>
        {/* Medium Challenge V */}
        <Medium /> 
      </div>
    )
  }
  
}

export default App;
