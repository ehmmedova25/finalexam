
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsThunk, postProductsThunk, deleteProductsThunk} from '../../redux/reducers/DashboardSlice';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch]);

    const formik = useFormik({
        initialValues: { name: '', price: '', image: '' },
        onSubmit: values => {
            if (!values.name || !values.price || !values.image) {
                alert(' bütün sahələri doldurun.');
                return;
            }
            dispatch(postProductsThunk(values));
            formik.resetForm();
        }
    });

    if (loading) return <span className={styles.status}>Yüklənir...</span>;
    if (error) return <span className={styles.status}>Xəta baş verdi: {error}</span>;

    return (
        <div className={styles.container}>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
                <input
                    id="image"
                    name="image"
                    type="text"
                    placeholder="Image URL"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />
                <button type="submit">Əlavə et</button>
            </form>

            <div className={styles.productList}>
                {categories.map(product => (
                    <div key={product._id} className={styles.productCard}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => dispatch(deleteProductsThunk(product._id))}>Sil</button>
                    </div>
                ))}
            </div>

           
        </div>
    );
};

export default Dashboard;