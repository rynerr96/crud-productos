import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ProductsForm = ({ submitButton, sendOfProducsForm, sendAppToForm, sendFormToApp }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const getFormData = (data) => {
    if (sendAppToForm === null) {
      sendOfProducsForm(data);
      reset(
        {
          name: '',
          category: '',
          price: '',
          isAvailable: false
        }
      )
    } else {
      sendFormToApp(data);
    }
  }

  useEffect(() => {
    if (sendAppToForm === null) {
      reset(
        {
          name: '',
          category: '',
          price: '',
          isAvailable: false
        }
      )

    } else {
      reset(sendAppToForm);
    }
  }, [sendAppToForm])

  return (
    <form className="form" onSubmit={handleSubmit(getFormData)}>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="name-id">Nombre</label>
        <input className='label__div--input'
          type="text"
          id="name-id"
          {...register('name', { required: true })}
        />
        <i className='icon bx bx-store-alt'></i>
        {
          errors.name
          &&
          <label htmlFor='name-id' className='label__error'>Este campo es requerido</label>
        }
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="category-id">Categoria </label>
        <input className='label__div--input'
          type="text"
          id="category-id"
          {...register('category', { required: true })}
        />
        <i className='icon bx bx-category' ></i>
        {
          errors.category
          &&
          <label htmlFor='category-id' className='label__error'>Este campo es requerido</label>
        }
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="price-id">Precio </label>
        <input className='label__div--input'
          type="number"
          id="price-id"
          {...register('price', { required: true })}
        />
        <i className='icon bx bx-purchase-tag-alt' ></i>
        {
          errors.price
          &&
          <label htmlFor='price-id' className='label__error'>Este campo es requerido</label>
        }
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="isAvailable-id">Disponible </label>
        <div className='form__div--switch'>
          <input className='label__div--input form__label--inputCheckbox'
          type="checkbox"
          id="isAvailable-id"
          {...register('isAvailable')}   
        />
        </div>

      </div>

      <button className="form-button" type='submit'>{submitButton}</button>
    </form>

  );
};

export default ProductsForm;