import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FavoriteContext } from './FavoriteProductsContext';

function ProductPage() {


    const [products, setProducts] = useState([]);

    const {favorites, setFavorites} = useContext(FavoriteContext)

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then((res) => {
                setProducts(res.data)
            })

    }, [])

    const addToFavorites = (item) => {

        let favoriteControl = favorites.find(q => q.id == item.id);

        if(!favoriteControl){
            setFavorites([...favorites, item])
        }

    }


    return (<>
        <ul>
            {
                products && products.map((item, key) => {
                    return <>
                        <li key={key}>{item.name}</li>
                        <button onClick={() => addToFavorites(item)}>Add Favorite</button>
                    </>
                })
            }
        </ul>
    </>

    )
}

export default ProductPage