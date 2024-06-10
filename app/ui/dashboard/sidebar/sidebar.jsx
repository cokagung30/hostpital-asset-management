import {
    MdDashboard,
    MdLogout,
    MdOutlineFolder,
    MdSupervisedUserCircle
} from 'react-icons/md';
import styles from './sidebar.module.css';
import MenuLink from './menu-link/menuLink';
import Image from 'next/image';
import Link from 'next/link';

const menus = [
    {
        title: "Pages",
        lists: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Inventory",
                path: "/dashboard/inventory",
                icon: <MdOutlineFolder />
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
        ]
    }
];

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />

                <div className={styles.userDetail}>
                    <span className={styles.username}>Jhon Doe</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menus.map(cat => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.lists.map(item => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <Link href="/login">
                <button className={styles.logout}>
                    <MdLogout />Logout
                </button>
            </Link>
        </div>
    );
};

export default SideBar;