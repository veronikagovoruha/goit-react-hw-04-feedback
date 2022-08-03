import Statistics from 'components/Statistics'
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { useState } from 'react';
import Notification from 'components/Notification';

const App = () => {
   const [state, setState] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
      options: ["good", "neutral", "bad"]
   });

   const onLeaveFeedback = (option) => {
      setState(prevState => {
         return {
            ...prevState,
            [option]: prevState[option] + 1,
         } 
     })
    }

    const countTotalFeedback = () => {
      const { good, neutral, bad } = state;
      const total = good + neutral + bad;
      return total;
  };

  const countPositiveFeedbackPercentage = (total) => {
      const { good } = state;
      const positivePercentage = Number((good / total * 100).toFixed(2));
      return positivePercentage;
  } 
  
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);
  return(
   <div>
      <Section title="Please leave feedback">
         <FeedbackOptions
         options = {state.options}
         onLeaveFeedback = {onLeaveFeedback}
      />
      </Section>
      
      {total ? (
      <Section title="Statistics">
         <Statistics 
         good = {state.good}
         neutral = {state.neutral}
         bad = {state.bad}
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
export default App;