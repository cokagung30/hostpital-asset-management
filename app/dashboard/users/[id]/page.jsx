import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Nama</label>
                    <input type="text" name="name" placeholder="Cokorda Duswanta" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="cokduata@gmail.com" />
                    <label>Username</label>
                    <input type="text" name="username" placeholder="cokduata" />
                    <label>Hak Akses</label>
                    <select name="role">
                        <option value="admin">Admin</option>
                        <option value="employee">Pegawai</option>
                        <option value="engineer">Teknisi</option>
                    </select>
                    <button>Perbaharui</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage