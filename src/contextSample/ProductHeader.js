import React, { useContext } from 'react'
import { FavoriteContext } from './FavoriteProductsContext'

function ProductHeader() {

    //Bu componentte favori ürün sayısı gösterilir!! Kaç adet ürün favoride?
    // const {favorites } = useContext(FavoriteContext)
    return (<>

        <FavoriteContext.Consumer>
            {
                contextValues => {
                    return <div>Favorite Products Count: {contextValues.favorites.length} </div>
                }
            }
        </FavoriteContext.Consumer>
        {/* <div>Favorite Products Count: {favorites.length} </div> */}
    </>
    )
}

export default ProductHeader