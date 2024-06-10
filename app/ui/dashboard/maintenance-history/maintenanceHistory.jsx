import styles from './maintenanceHistory.module.css'

const MaintenanceHistory = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Riwayat Perbaikan</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nama Inventaris</td>
                        <td>Ruangan</td>
                        <td>Status</td>
                        <td>Tanggal Pengajuan</td>
                        <td>Tanggal Perbaikan</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ac Daikin</td>
                        <td>
                            Ruang Melati
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>
                                Pengecekan
                            </span>
                        </td>
                        <td>09.06.2024</td>
                        <td>10.06.2024</td>
                    </tr>
                    <tr>
                        <td>Monitor</td>
                        <td>
                            Resepsionis
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>
                                Telah Diperbaiki
                            </span>
                        </td>
                        <td>01.06.2024</td>
                        <td>03.06.2024</td>
                    </tr>
                    <tr>
                        <td>Televisi</td>
                        <td>
                            Ruang Kenanga
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancel}`}>
                                Dibatalkan
                            </span>
                        </td>
                        <td>01.06.2024</td>
                        <td>01.06.2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MaintenanceHistory;