import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css';

class Section extends Component {
    render() {
        return (
            <div className={styles.sectionWrapper}>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Section;