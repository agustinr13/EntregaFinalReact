import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css'
import { CartContext } from '../Context/CartContext';


const ItemDetailContainer = () => {

    const {cart, addToCart, removeFromCart} = useContext(CartContext)



    const { itemID } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
    const db = getFirestore();
    const itemDoc = doc(db, 'items', `${itemID}`);

    getDoc(itemDoc).then((doc) => {
        if (doc.exists()) {
        setItem({ id: doc.id, ...doc.data() });
        } else {
        console.log('No se encontró el producto');
        }
    });
    }, [itemID]);

    if (!item) {
    return <p>Cargando...</p>;
    }
    console.log(cart)
    return (
    <div className='detailsCard'>
        <img src={item.imgID} alt={item.id} />
        <h3>{item.name}</h3>
        <h2>${item.price}</h2>
        <p>Disponibles: {item.stock}</p>
        <button onClick={() => addToCart(item, 1)}>AGREGAR AL CARRITO</button>
    </div>
    );
};

export default ItemDetailContainer;