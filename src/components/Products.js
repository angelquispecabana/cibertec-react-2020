import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import clsx from 'clsx';
import { Product } from '../components/Product';

import ProductService from '../Services/ProductService'

export const Products = () => {
    const [ products, setProducts ] = useState([]);
    const [productID, setProductID] = useState('');
    const [modalOpenDelete, setModalOpenDelete] = useState(false);

    useEffect(()=>{
        ProductService.getProducts()
            .then(response => {
                setProducts(response.data);
            })
    },[]);

    const handleDelete = (id) => {
        setProductID(id);
        setModalOpenDelete(true);
    }
    
    const deleteProductID = (id) => {
        ProductService.deleteProduct(id).then(() => {
            setProducts(products => {
                return products.filter(prod => prod.id !== id);
            });
            closeModal();
        });        
    }

    const confirmDelete = () => {
        deleteProductID(productID);
    }

    const closeModal = () => {
        setModalOpenDelete(false);
        setProductID('');
    }

    return(
        <div>
            <div className={
                clsx(
                    'modal',
                    {                        
                        'is-active': modalOpenDelete
                    }
                )
            }>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Eliminar Producto</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <p>
                            ¿Desea borrar el producto?
                        </p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={confirmDelete}>Eliminar</button>
                        <button className="button" onClick={closeModal}>Cancelar</button>
                    </footer>
                </div>
            </div>

            <h1>Lista de Productos</h1>
            <Link to='products/new' className='button is-link m-2'>
                Crear Producto
            </Link>
            <div className="container">
                <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Nombre</td>
                            <td>Detalle</td>
                            <td>Stock</td>
                            <td>Precio</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prod, index) => (
                            <Product 
                                key={`Products-list-${prod.id}`}
                                index={index + 1}
                                product = {prod}
                                deleteFn = {handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>            
        </div>
    )
}