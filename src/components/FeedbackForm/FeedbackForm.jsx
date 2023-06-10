import {Component} from 'react';

import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions.jsx';
import {Statistics} from '../Statistics/Statistics.jsx';
import {Section} from '../Section/Section.jsx';
import {Notification} from '../Notification/Notification.jsx';

import css from './FeedbackForm.module.css'


export class FeedbackForm extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0       
      }

      changeState = (option) => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }))
  }
      
       countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
    
      countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return Math.round((good / total) * 100)
      };

    render () {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        return (
        <div >
             <div className={css.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions              
              options={options}
              onLeaveFeedback={this.changeState}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </div>
            
        </div>
    )
    }   
}
