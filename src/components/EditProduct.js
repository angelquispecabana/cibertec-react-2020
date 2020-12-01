import { useState, useEffect } from 'react';

import ProductService from '../Services/ProductService';
import { ProductForm } from "./ProductForm"

export const EditProduct = ({ match, history }) => {
    const [product, setProduct] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const { productId } = match.params;

    useEffect(() => {
        ProductService.getProductById(productId)
            .then(response => {
                setProduct(response.data);
                setLoaded(true)})
            .catch(err => {
                console.log('Error',err);
            });
    }, []);

    const handleSubmit = (product) => {
        ProductService.updateProduct({ ...product, id : productId })
            .then(response => {
                history.replace('/');
            });
    };
    
    const gotoBack = () => {
        history.goBack();
    }

    return (
        <div className="content">
			<h2 className="has-text-centered m-5">Editar Producto</h2>
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
                    {loaded ? (<ProductForm 
                        onSubmit={handleSubmit}
                        onCancel={gotoBack}
                        product = {product}/>)
                    : null}
				</div>
			</div>
		</div>
    )
}