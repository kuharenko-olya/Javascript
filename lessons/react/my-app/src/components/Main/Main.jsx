import styles from './Main.module.scss'
import Card from "./Card/Card";
import {useState, useEffect} from "react";

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:4000/products')
                .then((response) => response.json())
                .then((products) => setProducts(products))
    }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.title}>Мы рекомендуем</div>
                <div className={styles.menu}>
                    {products.map(product => {
                        return (
                            <Card
                                img={product.img}
                                title={product.title}
                                weight={product.weight}
                                description={product.description}
                                price={product.price}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default Main