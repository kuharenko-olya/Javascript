import styles from './Main.module.scss'
import Card from "./Card/Card";
import {products} from "./products";

const Main = () => {
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