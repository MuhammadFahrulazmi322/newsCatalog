import styles from './Navbar.module.css'
import newsIcon from '../../assets/news-icon.svg'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../constants/categories'
import { useState } from 'react'

const Navbar = () =>{
    const [selected, setSelected] = useState('')
    return(
        <nav className={styles.nav}>
            <div className={styles.navIconWrapper}>
                <img className={styles.navIcon} src={newsIcon} alt='Navbar icon'/>
                <h1 className={styles.navTitle}>NEWS</h1>
            </div>

            <div className={styles.categories}>
                {CATEGORIES.map((category,index)=>{
                    return(
                        <Link
                            key={index}
                            onClick={()=> setSelected(category.name)}
                            to={`/${category.slug}`}
                            className={classnames(styles.category,{
                                [styles.selected] : selected === category.name
                            })}
                        >
                            {category.name}
                        </Link>
                    )
                })}
            </div>
        </nav>

    )
}

export default Navbar