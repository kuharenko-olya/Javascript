import styles from './Main.module.scss'
import {Component} from "react";
import CardClass from "./Card/СardClass";


const options = [
    {
        label: "По умолчанию",
        value: "default",
    },
    {
        label: "Название (A-Я)",
        value: "ая",
    },
    {
        label: "Название (Я-A)",
        value: "яа",
    },
];

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            dataIsLoaded: false,
            cart: [],
            selectedOption: null,
        };
    }

    componentDidMount() {
        fetch(
            "http://127.0.0.1:4000/products")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    products: data,
                    dataIsLoaded: true,
                });
            })
    }


    handlerAddCart = (product) => {
        const copy = Object.assign({}, this.state);
        copy.cart.push(product);
        this.setState(copy);
    }

    handleChange = (event) => {
        const sorted = [...this.state.products];
        if (event.target.value === 'ая') {
            sorted.sort((a, b) => a.title.localeCompare(b.title))
        }

        if (event.target.value === 'яа') {
            sorted.sort((a, b) => a.title.localeCompare(b.title)).reverse()
        }

        if (event.target.value === 'default') {
            sorted.sort((a, b) => a.id - b.id);
        }

        this.setState({
            selectedOption: event.target.value,
            products: sorted
        })
    }

    render() {
        const {dataIsLoaded, products} = this.state;
        let data = <p>Data is loading</p>


        if (dataIsLoaded) {
            data = <div className={styles.menu}>
                {
                    products.map(product => {
                        return <CardClass
                            key={product.id}
                            product={product}
                            onAddCart={this.handlerAddCart}
                        />
                    })
                }
            </div>
        }


        return (
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles['backet-wrapper']}>
                        <div className={styles.backet}>
                            <div>Корзина</div>
                            <div className={styles.count}>{this.state.cart.length}</div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.title}>Мы рекомендуем</div>
                        <select onChange={this.handleChange}>
                            {
                                options.map((option, index) => {
                                    return <option
                                        key={index}
                                        value={option.value}>
                                        {option.label}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    {data}
                </main>
            </div>
        )
    }
}