import React from 'react';

class Medium extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {
          name: 'Nicolas Conaway',
          number: '704-604-3099',
          dateOfBirth: '09/07/2000'
      }
    }
  }
 
  render(){
    return(
    <MediumChild BasicInfo={this.state.person} />
    )
  }
}

class MediumChild extends React.Component {

    render(){
        return(
            <div className="veryEasy">
                <h1 className="name">{this.props.BasicInfo.name}</h1>
                <p className="number">{this.props.BasicInfo.number}</p>
                <p className="dateOfBirth">{this.props.BasicInfo.dateOfBirth}</p>
            </div> 
        )
    }
}

export default Medium