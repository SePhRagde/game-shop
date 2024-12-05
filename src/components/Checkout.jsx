import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext.jsx';
import Brief from './Brief.jsx';

const Checkout = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const onSubmit = (data) => {
    console.log('Datos del usuario:', data);
    console.log('Productos:', cart);
    console.log('Total:', getTotalPrice());
    clearCart();
    alert("Compra realizada con éxito");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Finalizar Compra</h1>
      <Brief cart={cart} total={getTotalPrice()} />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            id="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register("name", { required: true })}
          />
          {errors.name && <div className="invalid-feedback">Este campo es requerido</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register("email", { required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ })}
          />
          {errors.email && <div className="invalid-feedback">Email no válido</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección:</label>
          <input
            id="address"
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            {...register("address", { required: true })}
          />
          {errors.address && <div className="invalid-feedback">Este campo es requerido</div>}
        </div>
        <button type="submit" className="btn btn-success w-100">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;