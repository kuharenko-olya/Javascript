import styles from './Card.module.scss'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles['image-product']}>
                <img className={styles.image} src={props.img} alt="pizza"/>
            </div>
            <div className={styles.product}>
                <div className={styles.title}>
                    <a className={styles.link} href="#">{props.title}</a>
                </div>
                <div className={styles.weight}>{props.weight}</div>
                <div className={styles.description}>
                    {props.description}
                </div>
                <div className={styles.price}>{props.price}</div>
            </div>
            <button className={styles['btn-order']}>Заказать</button>
            {/*<button className>В корзину</button>*/}
        </div>
    )
}

export default Card