import React from 'react';


const ProductsList = ({ dataForm, deleteButton, modifyButton, deleteObeject, modifyObject }) => {
  return (
    <ul className='ul'>
      {dataForm.map((obejectForm, index) =>
        <li className={obejectForm.isAvailable
          ?
          'ul__li--disponible'
          :
          'ul__li--NoDisponible'}
          key={index}>
          <h2 className='ul__li--h2' ><span className='li__h2--span' >Nombre: </span>{obejectForm.name}</h2>
          <h3 className='ul__li--h3' ><span className='li__h2--span'>Categoria: </span> {obejectForm.category}</h3>
          <h3 className='ul__li--h3' ><span className='li__h2--span'>Precio: </span> {obejectForm.price}</h3>
          {obejectForm.isAvailable ?
            <div className='ul__li--divAvailable'>
              <h4 className='ul__li--h4'>Disponible <img className='icon--available' src="/cheque.png" alt="Disponible" />
              </h4>
            </div>
            :
            <div className='ul__li--divAvailable'>
              <h4 className='ul__li--h4'>Disponible <img className='icon--available' src="/cerrar.png" alt="No disponible" />
              </h4>
            </div>
          }
          <div className='ul__li--div'>
            <button className='ul__li--button' onClick={() => deleteObeject(obejectForm)}>{<img className='button--icon' src={`${deleteButton}`} alt="delete" />}</button>
            <button className='ul__li--button' onClick={() => modifyObject(obejectForm)}>{<img className='button--icon' src={`${modifyButton}`} alt="delete" />}</button>
          </div>
        </li>
      )}
    </ul>

  );
};

export default ProductsList;


