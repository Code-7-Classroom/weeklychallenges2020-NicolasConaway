import React from 'react';
import HardList from './moreChallenges/HardTemplate'

class Hard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          person:[
            {name: 'John Doe', number: '704-564-7845', DoB: '04/21/1987'},
            {name: 'Jane Doe', number: '704-893-8952', DoB: '11/13/1991'},
            {name: 'Mike Smith', number: '123-456-7890', DoB: '07/02/1965'}
          ]
        }
      };

    render(){
        return(
            <div>
                {this.state.person.map(peeps => {
                    return <HardList 
                    name={peeps.name}
                    number={peeps.number}
                    DoB={peeps.DoB} />
                })}
            </div>
        )
    }
}

export default Hard