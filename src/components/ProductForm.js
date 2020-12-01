import { useFormik } from 'formik';
import * as yup from 'yup';
import clsx from 'clsx';

export const ProductForm = ({onSubmit, onCancel, product}) => {
    const formik = useFormik({
        initialValues: {
            name: product.name || '',
            description: product.description || '',
            stock: product.stock || 0,
            price: product.price || 0
        },
        onSubmit: (values) => {
            onSubmit(values)
        },
        validationSchema: yup.object({
            name: yup.string()
                .max(15,'Maximo caracteres es 15')
                .required('El campo es requerido'),
            description: yup.string()
                .max(30,'Maximo caracteres es 30'),
            stock : yup.number()
                .typeError('Solo numeros')
                .min(1, 'El stock minimo es 1 unidad')
                .max(100, 'El stock maximo es 100 unidad'),
            price : yup.number()
                .typeError('Solo numeros')
                .required('El campo es requerido')
                .min(0, 'El precio minimo es 0')
        })
    })

    const {errors, touched, handleSubmit, isValid, values, handleChange, handleBlur} = formik;

    return (
        <div className="container">
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label className="label">Nombre</label>
					<div className="control">
						<input
							className={
                                clsx(
                                    'input',
                                    {
                                        'is-danger': errors.name && touched.name,
                                        'is-succes': !errors.name && touched.name
                                    }
                                )
                            }
							type="text"
							name="name"
							value={values.name}
                            onChange={handleChange}
                            onBlur = {handleBlur}
						/>
					</div>
                    {errors.name && touched.name ? (<p className='help is-danger'>{errors.name}</p> ): null}
				</div>
				<div className="field">
					<label className="label">Detalle</label>
					<div className="control">
						<textarea
							className={
                                clsx(
                                    'textarea',
                                    {
                                        'is-danger': errors.description && touched.description,
                                        'is-succes': !errors.description && touched.description
                                    }
                                )
                            }
                            type="text"
							name="description"
							value={values.description}
                            onChange={handleChange}
                            onBlur = {handleBlur}
						/>
					</div>
                    {errors.description && touched.description ? (<p className='help is-danger'>{errors.description}</p> ): null}
				</div>
				<div className="field">
					<label className="label">Stock</label>
					<div className="control">
						<input
							className={
                                clsx(
                                    'input',
                                    {
                                        'is-danger': errors.stock && touched.stock,
                                        'is-succes': !errors.stock && touched.stock
                                    }
                                )
                            }
							type="number"
							name="stock"
							value={values.stock}
                            onChange={handleChange}
                            onBlur = {handleBlur}
						/>
					</div>
                    {errors.stock && touched.stock ? (<p className='help is-danger'>{errors.stock}</p> ): null}
				</div>
				<div className="field">
					<label className="label">Precio</label>
					<div className="control">
						<input
							className={
                                clsx(
                                    'input',
                                    {
                                        'is-danger': errors.price && touched.price,
                                        'is-succes': !errors.price && touched.price
                                    }
                                )
                            }
                            type="number"
							name="price"
							value={values.price}
                            onChange={handleChange}
                            onBlur = {handleBlur}
						/>
					</div>
                    {errors.price && touched.price ? (<p className='help is-danger'>{errors.price}</p> ): null}
				</div>
				<div className="field is-grouped">
					<div className="control">
						<button
                            type="submit"
							className="button is-link"
                            disabled={!isValid}
                            onClick={onSubmit}
						>
							Guardar
						</button>
					</div>
					<div className="control">
                        <button 
                            type="button"
                            className="button is-link is-light" onClick={onCancel}>
							Cancelar
						</button>
					</div>
				</div>
			</form>
		</div>
    )
    
}