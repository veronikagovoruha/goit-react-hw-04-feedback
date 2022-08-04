import Statistics from 'components/Statistics'
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { useState } from 'react';
import Notification from 'components/Notification';

const App = () => {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   const options = ["good", "neutral", "bad"];

   const onLeaveFeedback = (option) => {
      if("good" === option){
         setGood(prevState => {
           return prevState + 1;
         });
      }else if ("neutral" === option){
         setNeutral(prevState => {
            return prevState + 1;
          });
      }else {setBad(prevState => {
         return prevState + 1;
       })}
    }

    const countTotalFeedback = () => {
      const total = good + neutral + bad;
      return total;
  };

  const countPositiveFeedbackPercentage = (total) => {
      const positivePercentage = Number((good / total * 100).toFixed(2));
      return positivePercentage;
  } 
  
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);
  return(
   <div>
      <Section title="Please leave feedback">
         <FeedbackOptions
         options = {options}
         onLeaveFeedback = {onLeaveFeedback}
      />
      </Section>
      
      {total ? (
      <Section title="Statistics">
         <Statistics 
         good = {good}
         neutral = {neutral}
         bad = {bad}
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