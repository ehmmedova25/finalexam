import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../../redux/reducers/ProductSlice';
import styles from './ProductSchema.module.css'

const ProductSchema= () => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.products)

    const [basket, setBasket] = useState([])
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        dispatch(getProductsThunk())
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || []
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        setBasket(storedBasket)
        setWishlist(storedWishlist)
    }, [dispatch])

    const addToBasket = (product) => {
        const basketCopy = [...basket]
        const existing = basketCopy.find((item) => item._id === product._id)

        if (existing) {
            existing.quantity += 1
        } else {
            basketCopy.push({ ...product, quantity: 1 })
        }

        localStorage.setItem('basket', JSON.stringify(basketCopy))
        setBasket(basketCopy)
    }

    const addToWishlist = (product) => {
        const wishlistCopy = [...wishlist]
        const exists = wishlistCopy.find((item) => item._id === product._id)

        if (exists) {
            alert('Product already in wishlist')
        } else {
            wishlistCopy.push(product)
            localStorage.setItem('wishlist', JSON.stringify(wishlistCopy))
            setWishlist(wishlistCopy)
        }
    }

    if (loading) return <span>Yuklenir</span>
    if (error) return <span>Yukleme zamani xeta bas verdi</span>

    return (
        <section className={styles.productMenSection}>
            <div className={styles.container}>
                <div className={styles.menTitle}>
                    <h1>New realeased Products for Women</h1>
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
                            <button onClick={() => addToBasket(item)}>Add to Basket</button>
                            <button onClick={() => addToWishlist(item)}>Add to Wishlist</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductSchema