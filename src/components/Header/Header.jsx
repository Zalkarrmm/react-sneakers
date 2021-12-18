import React from 'react';
import cls from './Header.module.scss';
const Header = () => {
    return (
        <div className={cls.root}>
            <div className={cls.logo}>
                <img src='/img/logo.png' className={cls.logoImg} />
                <div className={cls.logoName}>
                    <h2>REACT SNEAKERS</h2>
                    <p>Магазин кросcовок примиум качества</p>
                </div>
            </div>
            <div className={cls.nav}>
                <button className={cls.basket}>
                    <img src='/icons/shopping-bag.png'/>
                    <p>0 руб.</p>
                </button>
                <button className={cls.heartButton}>
                    <img src="/icons/heart.png" alt="liked" />
                </button>
                <button className={cls.userButton}>
                    <img src="/icons/user.png" alt="profile" />
                </button>
            </div>
        </div>
    )
}

export default Header
