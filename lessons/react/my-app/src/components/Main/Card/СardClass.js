import styles from './Card.module.scss'
import {Component} from "react";

export default class Card extends Component {
    constructor(props) {
        super(props)
    }

    handlerOrder = () => {
        this.props.onAddCart(this.props.product);
    }

    render() {
        return (
            <div className={styles.card}>
                <div className={styles['image-product']}>
                    <img className={styles.image} src={this.props.product.img} alt="pizza"/>
                </div>
                <div className={styles.product}>
                    <div className={styles.title}>
                        <a className={styles.link} href="#">{this.props.product.title}</a>
                    </div>
                    <div className={styles.weight}>{this.props.product.weight}</div>
                    <div className={styles.description}>
                        {this.props.product.description}
                    </div>
                    <div className={styles.price}>{this.props.product.price}</div>
                </div>
                <button onClick={this.handlerOrder} className={styles['btn-order']}>
                    Заказать
                </button>
            </div>
        );
    }
}