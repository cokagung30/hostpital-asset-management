import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/search/search";
import Link from "next/link";

const UserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Cari Pengguna" />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>
                        Tambah Baru
                    </button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nama</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Hak Akses</td>
                        <td>Status</td>
                        <td>Aksi</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cokorda Duswanta</td>
                        <td>cokduata</td>
                        <td>cokduata@gmail.com</td>
                        <td>Admin</td>
                        <td>
                            <span>Aktif</span>
                        </td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/users/test">
                                <button className={`${styles.button} ${styles.view}`}>Lihat</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Hapus</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default UserPage