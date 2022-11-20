import Logo from '../../assets/img/logo-white-mafia.svg';
import styles from '../Footer/Footer.module.scss';
import {menu1, menu2,menu3} from './menu';
import main from '../Main/Main.module.scss'

const Footer = () => {
    return (

        <footer className={styles.footer}>
            <div className={main.container}>
            <div className={styles['footer-container']}>
                <div className={styles.info}>
                    <a className={styles.logo} href='#'>
                        <img src={Logo} alt='logo'/>
                    </a>
                    <div className={styles.copyright}>
                        <span>© 2002 - 2022 MAFIA</span>
                        <span>Все права защищены.</span>
                    </div>
                </div>
                <div className={styles.info}>
                    <ul className={styles.menu}>
                        {menu1.map((item, index) => (
                            <li key={`menu1 item ${index}`}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.info}>
                    <ul className={styles.menu}>
                        {menu2.map((item, index) => (
                            <li key={`menu2 item ${index}`}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.info}>
                    <ul className={styles.menu}>
                        {menu3.map((item, index) => (
                            <li key={`menu3 item ${index}`}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        </footer>

    )
}

export default Footer;