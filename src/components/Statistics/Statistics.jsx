import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './stat.module.css';

class Statistics extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <span className={styles.item}>Good: {this.props.good}</span>
                <span className={styles.item}>Neutral: {this.props.neutral}</span>
                <span className={styles.item}>Bad: {this.props.bad}</span>
                <span className={styles.item}>Total: {this.props.total}</span>
                <span className={styles.item}>Positive feedback: {this.props.positivePercentage}%</span>
            </div>
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;