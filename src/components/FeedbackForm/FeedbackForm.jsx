import {Component} from 'react';
import vouts from 'vouts.json'

export class FeedbackForm extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      handleClick = event => {
        const {name} = event.target;


        this.setState (prevState => ({
            [name]: prevState[name] +1})
       ) }
      

    render () {
        return (
        <div>
            <h1>Please, leave feedback</h1>
            {vouts.map(vout => (
            <button 
            key = {vout.id}
            className='button'
            name = {vout.id} 
            onClick={this.handleClick}>
                {vout.opinion}
                </button>))}
            
            
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
        </div>
    )
    }   
}

//export default FeedbackForm;