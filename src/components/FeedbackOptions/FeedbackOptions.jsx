import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
        const buttons = options.map((option, index) => {
            return (
                <button
                    type='button'
                    onClick={() => onLeaveFeedback(option)}
                    key={index}
                    className={styles.button}
                >
                    {option}
                </button>
            )
        })
        return (
            <div>
                {buttons}
            </div>
        );
    }

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;