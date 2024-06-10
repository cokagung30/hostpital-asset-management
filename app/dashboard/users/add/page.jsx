import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action="" className={styles.form}>
                <input type="text" placeholder='Nama' name='name' required />

                <input type="text" placeholder='Username' name='username' required />

                <input type="email" placeholder='Email' name='email' required />

                <input type="password" placeholder='Kata Sandi' name='password' required />

                <select name="role">
                    <option disabled selected>Pilih Hak Akses</option>
                    <option value="admin">Admin</option>
                    <option value="employee">Pegawai</option>
                    <option value="engineer">Teknisi</option>
                </select>

                <button type='submit'>Simpan</button>
            </form>
        </div>
    );
};

export default AddUserPage