import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'


const Carrito = () => {
    
    const {cart, removeFromCart, getTotal} = useContext(CartContext)

    const [buyerName, setBuyerName] = useState('second')
    const [buyerEmail, setBuyerEmail] = useState('second')
    const total = getTotal()
    const cartItems = cart.map((product) => {
        return {
            id: product.id,
            description: product.description,
            imgID: product.imgID,
            price: product.price,
            category: product.category
        }
    })

    const db = getFirestore()

    const ordersCollection = collection(db, 'orders')

    const handleSubmit = (e) => {
        e.preventDefault()

        const order = {
            buyer: {
                name: buyerName,
                email: buyerEmail
            },
            items: {cartItems},
            total: total
        }
        
        addDoc(ordersCollection, order)
        .then((docRef) => {
            alert("GRACIAS POR SU COMPRA!")
            resetForm()
        })
        .catch((e)=>{
            console.log("Error")
        })
    }
        
    const resetForm = () => {
        setBuyerName('')
        setBuyerEmail('')
        getTotal=0
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    {
                        cart ? (
                            cart.map((item) => (
                                
                                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                        <div className="card h-100">
                                            <img src={item.imgID} className="card-img-top" alt={item.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">$ {item.price}</p>
                                            </div>
                                            <div className="card-footer">
                                                <button onClick={() => removeFromCart(item.id)}>Eliminar del carrito</button>
                                            </div>
                                        </div>
                                    </div>
                                
                                ))
                                
                                ) : (
                                    <p>No hay items en el carrito</p>
                        )
                    }
                </div>
            </div>
            <div>
                <p>Costo total de la compra: ${getTotal()}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label >Nombre:</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" onChange={(e) => setBuyerName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label >Correo electrónico:</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => setBuyerEmail(e.target.value)}></input>    </div>
                        <button type="submit" className="btn btn-primary">Comprar</button>
                </form>
            </div> 
        </div>
  )
}

export default Carrito