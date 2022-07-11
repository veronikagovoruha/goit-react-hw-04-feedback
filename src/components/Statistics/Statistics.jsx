import PropTypes from 'prop-types';
import styles from './stat.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
        return (
            <div className={styles.wrapper}>
                <span className={styles.item}>Good: {good}</span>
                <span className={styles.item}>Neutral: {neutral}</span>
                <span className={styles.item}>Bad: {bad}</span>
                <span className={styles.item}>Total: {total}</span>
                <span className={styles.item}>Positive feedback: {positivePercentage}%</span>
            </div>
        )
    }

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;