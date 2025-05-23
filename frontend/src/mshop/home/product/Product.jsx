import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../redux/reducers/ProductSlice';
import styles from './Product.module.css'

const Product = () => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [dispatch])

    if (loading) return <span>Yuklenir</span>
    if (error) return <span>Yukleme zamani xeta bas verdi</span>

    return (
        <section className={styles.productMenSection}>
            <div className={styles.opacity}></div>
            <div className={styles.container}>
                <div className={styles.menTitle}>
                    <h1>New realeased Products for Men</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className={styles.menBox}>
                    {product.slice(0, 3).map((item, index) => (
                        <div key={index} className={styles.menProduct}>
                            <div className={styles.productimage}><img src={item.image} alt="" /></div>
                            <div className={styles.productBody}>
                                <h5>{item.name}</h5>
                                <h3>${item.price}</h3>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </section>
    )
}

export default Product;