import Pagination from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/inventory/inventory.module.css";
import Search from "@/app/ui/search/search";
import Link from "next/link";

const ProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Cari Inventaris" />
                <Link href="/dashboard/inventory/add">
                    <button className={styles.addButton}>
                        Tambah Baru
                    </button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nama Barang</td>
                        <td>Kode</td>
                        <td>Kondisi</td>
                        <td>Aksi</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Televisi</td>
                        <td>B-0001</td>
                        <td>
                            <span>Baik</span>
                        </td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/dashboard/inventory/test">
                                <button className={`${styles.button} ${styles.view}`}>Lihat</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Hapus</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>AC Daikin</td>
                        <td>B-0002</td>
                        <td>
                            <span>Rusak</span>
                        </td>
                        <td>
                            <div className={styles.buttons}>
                            <Link href="/">
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

export default ProductPage