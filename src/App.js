import Statistics from 'components/Statistics'
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { Component } from 'react';
import Notification from 'components/Notification';

export default class App extends Component{
   state = {
      good: 0,
      neutral: 0,
      bad: 0,
      options: ["good", "neutral", "bad"]
    };
    onLeaveFeedback =(option) => {
      this.setState(prevState => {
         return {
            [option]: prevState[option] + 1,
         } 
     })
    }

    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad;
      return total;
  };

  countPositiveFeedbackPercentage = (total) => {
      const { good } = this.state;
      const positivePercentage = Number((good / total * 100).toFixed(2));
      return positivePercentage;
  }
   render(){
      const total = this.countTotalFeedback();
      const positivePercentage = this.countPositiveFeedbackPercentage(total);

      return(
         <div>
            <Section title="Please leave feedback">
               <FeedbackOptions
               options = {this.state.options}
               onLeaveFeedback = {this.onLeaveFeedback}
            />
            </Section>
            
            {total ? (
            <Section title="Statistics">
               <Statistics 
               good = {this.state.good}
               neutral = {this.state.neutral}
               bad = {this.state.bad}
               total = {total}
               positivePercentage = {positivePercentage}
            />
            </Section>
            ) : (
               <Section>
                  <Notification message = "There is no feedback"/>
               </Section>
               
            )}
            
         </div>
      )
    }

}