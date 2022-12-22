import Logo from '../../assets/img/logo.svg';
import {menu} from './menu';
import DefaultButton from '../Buttons/default-button';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menu}>
                    {menu.map((item, index) => (
                        <li key={`menu item ${index}`}>
                            <a href={item.link}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a className={styles.logo} href='#'>
                <img src={Logo} alt='logo'/>
            </a>
            <div className={styles['check-order']}>
                <DefaultButton/>
            </div>
        </header>
    )
}
