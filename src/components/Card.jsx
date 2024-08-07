import React from 'react'
import styles from '../styles/Card.module.css';

const Card = ({ src, alt, title, id, onClick }) => {
    return (
        <button className={styles.card} id={id} onClick={() => onClick(id)}>
            <img src={src} alt={alt} />
            <p>{title}</p>
        </button>
    )
}

export default Card