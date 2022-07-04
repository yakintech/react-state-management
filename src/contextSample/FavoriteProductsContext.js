import { createContext, useState } from "react";


export const FavoriteContext = createContext(null)


export const FavoriteProvider = ({children}) => {

    //global state içeriye tanımlıyorum...
    const [favorites, setFavorites] = useState([])

    const values = {
        favorites,
        setFavorites
    }

    return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>

}