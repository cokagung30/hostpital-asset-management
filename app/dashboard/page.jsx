import Card from "../ui/dashboard/card/card";
import MaintenanceHistory from "../ui/dashboard/maintenance-history/maintenanceHistory";
import styles from "../ui/dashboard/dashboard.module.css"

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <MaintenanceHistory />
            </div>
        </div>
    );
};

export default Dashboard