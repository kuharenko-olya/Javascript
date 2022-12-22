import {Component} from "react";
import {differenceInSeconds} from "date-fns";
import styles from './ActivityChecker.module.scss';

const timeoutForDisplayPanel = 30;

export class ActivityChecker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastActivity: null,
            messageUser: null,
            checkActivityInterval: null
        }
    }

    componentDidMount() {
        // Код написан в этом методе потому что метод выполняется один раз
        window.addEventListener('mousemove', this.UpdateActivityUser)
        window.addEventListener('click', this.UpdateActivityUser)
        window.addEventListener('keydown', this.UpdateActivityUser)

        const intervalId = setInterval(() => {
            let difference = differenceInSeconds((new Date().getTime()), this.state.lastActivity);
            if (difference >= timeoutForDisplayPanel) {
                this.setState({
                    messageUser: 'Вы не активны на сайте. Подвигайте мышкой',
                })
            }
        }, 1000)
        this.setState({
            checkActivityInterval: intervalId
        })
    }


    UpdateActivityUser = () => {
        this.setState({
            lastActivity: new Date().getTime(),
            messageUser: null
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.checkActivityInterval);
        // остановила интервал чтобы он перестал каждую секунду проверять активность пользователя
        // зачем я удаляю обработчики событий?
        // чтобы все обработчики отвязались от компонента при его удалении
        window.removeEventListener('mousemove', this.UpdateActivityUser)
        window.removeEventListener('click', this.UpdateActivityUser)
        window.removeEventListener('keydown', this.UpdateActivityUser)
    }

    render() {
        let activityPanel = this.state.messageUser;
        return (
            <div>
                {activityPanel && <div className={styles['notification-user']}>{this.state.messageUser}</div>}
            </div>
        );
    }
}





