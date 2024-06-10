import styles from '@/app/ui/dashboard/inventory/addInventory/addInventory.module.css'

const AddInventoryPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Name' name='name' required />

                <input type="text" placeholder='Kode Barang...' name='code' required />

                <select name="location">
                    <option disabled selected>Pilih Lokasi Ditempatkan</option>
                    <option value="melati">Ruang Melati</option>
                    <option value="kenanga">Ruang Kenanga</option>
                </select>

                <button type='submit'>Simpan</button>
            </form>
        </div>
    );
};

export default AddInventoryPage