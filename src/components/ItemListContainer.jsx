import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'


const ItemListContainer = () => {

    const [items, setItems] = useState()
    //


    useEffect(() => {
        const db = getFirestore()
        const coderCol = collection(db, 'items')

        getDocs(coderCol).then((snapshot) => {
            if(snapshot === 0){
                console.log("No hay resultados")
            }
            setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })

    }, [])




  return (
    <div className='container'>
        <div className="row">

        {
            items? (
                items.map((item) => (
                    <div key={item.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div className="card h-100">
                                    <img src={item.imgID} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">${item.price}</p>
                                    </div>
                                    <div className="card-footer">
                                    <Link to={`/item/${item.id}`} className="btn btn-primary">Detalles</Link>
                                    </div>
                                </div>
                    </div>
                ))
                ) : (
                    <p>Cargando...</p>
                    )
                }
        </div>
    </div>
  )
}

export default ItemListContainer