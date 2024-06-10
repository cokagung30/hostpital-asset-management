import styles from '@/app/ui/dashboard/inventory/singleInventory/singleInventory.module.css'

const SingleInventoryPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Nama</label>
                    <input type="text" name="name" placeholder="Televisi" />
                    <label>Kode Barang</label>
                    <input type="text" name="code" placeholder="B-001" />
                    <label>Lokasi</label>
                    <select name="location">
                        <option value="melati" selected>Ruang Melati</option>
                        <option value="kenanga">Ruang Kenanga</option>
                    </select>
                    <button>Perbaharui</button>
                </form>
            </div>
        </div>
    );
};

export default SingleInventoryPage