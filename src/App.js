import React from 'react'
import cls from './App.module.scss'
import Header from './components/Header/Header';
const App = () => {
    return (
        <div className={cls.root}>
            <div className={cls.componentsOwner}>
                <Header />
                <div className={cls.title}>
                    <h1>
                    All sneakers
                    </h1>
                    <form>
                        <label>
                        <input className={cls.searcInput} type='search' placeholder='search'/>
                        </label>
                    </form>
                </div>
                <div className={cls.firstCosntainer}>
                    <div className={cls.sneakerCard}>
                        <button className={cls.like}>
                        <i class="far fa-heart"></i>
                        </button>
                        <div className={cls.cardTop}>
                            <img width='133px' height='122px' src='/img/nike.jpg' />
                            <p>lorem</p>
                        </div>
                        <div className={cls.bottomPartCard}>
                            <div className={cls.CardLeftSideText}>
                                <p className={cls.cena}>цена:</p>
                                <p>111111p</p>
                            </div>
                            <button className={cls.addProduct}> 
                                +
                            </button>
                        </div>
                    </div>
                    <div className={cls.sneakerCard}>
                        <button className={cls.like}>
                        <i class="far fa-heart"></i>
                        </button>
                        <div className={cls.cardTop}>
                            <img width='133px' height='122px' src='https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' />
                            <p>lorem</p>
                        </div>
                        <div className={cls.bottomPartCard}>
                            <div className={cls.CardLeftSideText}>
                                <p className={cls.cena}>цена:</p>
                                <p>111111p</p>
                            </div>
                            <button className={cls.addProduct}> 
                                +
                            </button>
                        </div>
                    </div>
                    <div className={cls.sneakerCard}>
                        <button className={cls.like}>
                        <i class="far fa-heart"></i>
                        </button>
                        <div className={cls.cardTop}>
                            <img width='133px' height='122px' src='https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' />
                            <p>lorem</p>
                        </div>
                        <div className={cls.bottomPartCard}>
                            <div className={cls.CardLeftSideText}>
                                <p className={cls.cena}>цена:</p>
                                <p>111111p</p>
                            </div>
                            <button className={cls.addProduct}> 
                                +
                            </button>
                        </div>
                    </div>
                    <div className={cls.sneakerCard}>
                        <button className={cls.like}>
                        <i class="far fa-heart"></i>
                        </button>
                        <div className={cls.cardTop}>
                            <img width='133px' height='122px' src='https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' />
                            <p>lorem</p>
                        </div>
                        <div className={cls.bottomPartCard}>
                            <div className={cls.CardLeftSideText}>
                                <p className={cls.cena}>цена:</p>
                                <p>111111p</p>
                            </div>
                            <button className={cls.addProduct}> 
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default App;