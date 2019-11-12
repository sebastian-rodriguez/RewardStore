import React, { Component } from 'react'

//components
import ProductsWrapper from './styled'
import Card from '../Card'

class ProductsLIst extends Component{
    render(){

        const { products, user } = this.props
        
        return(
            <ProductsWrapper>
                { 
                    products ? products.map( product => (
                        <Card product={ product } user={ user } key={ product._id }></Card> 
                    )) : null 
                }
            </ProductsWrapper>
        )
    }
}



export default ProductsLIst;