import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    { message: "아침" },
    { message: "점심" },
    { message: "저녁1" },
    { message: "저녁2" },
    { message: "저녁3" },
    { message: "저녁4" },
    { message: "저녁5" },
    { message: "저녁6" },
];

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const { notifications } = this.state;
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                const newNotification = reservedNotifications[index];
                this.setState({
                    notifications: [...notifications, newNotification],
                });
            } else {
                clearInterval(this.timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification, index) => (
                    <Notification key={index} message={notification.message} />
                ))}
            </div>
        );
    }
}

export default NotificationList;
