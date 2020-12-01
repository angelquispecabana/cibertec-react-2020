import { useHistory } from 'react-router-dom'

import ProductService from "../Services/ProductService"
import { ProductForm } from "./ProductForm"

export const NewProduct = () => {
    const history = useHistory();

    const handleSubmit = (product) => {
        ProductService.createProduct(product)
            .then(response => {
                history.replace('/');
            });
    };
    
    const gotoBack = () => {
        history.goBack();
    }

    return (
        <div className="content">
			<h2 className="has-text-centered m-5">Crear Producto</h2>
			<div className="columns">
				<div className="column is-three-fifths is-offset-one-fifth">
                    <ProductForm 
                        onSubmit={handleSubmit}
                        onCancel={gotoBack}
                        product = {{}}/>
				</div>
			</div>
		</div>
    )
}