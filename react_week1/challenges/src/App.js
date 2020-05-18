import React from 'react';
import './App.css';
import Medium from './moreChallenges/Medium'
import Hard from './Hard'

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
      <div>
        <div className="veryEasy">
          <h1>Nicolas Conaway (veryEasy)</h1>
          <p>Number: 704-604-3099</p>
          <p>Date of Birth:09/07/2000</p>
        </div>
        
      <div>
        {/* Medium Challenge V */}
        <Medium />
      </div>
         
      <div>
        {/* Hard Challenges V */}
        <Hard />
      </div>
        
      </div>
    )
  }
  
}

export default App;
