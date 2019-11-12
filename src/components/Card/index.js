import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

//components
import { CardWrapper, CardHeader, CardImage, CardDescription } from './styled'

//assets
import coin from './../../assets/icons/coin.svg'

class Card extends Component{
    render(){

        const { product, history, user } = this.props;
        
        return(
            <CardWrapper onClick={ () => history.push(`/product/${ product._id }`) }>
                    <CardHeader>
                        <div className={ user && user.points > product.cost ? "priceContainer" : "priceContainer-desactived"}>
                            <span className={ user && user.points > product.cost ? "price" : "price-desactived"}>
                                { product.cost }
                            </span>
                            <img src={ coin } alt="coin" width="25px" height="25px"></img>
                        </div>    
                    </CardHeader>
                    <CardImage>
                        <img src= { product.img.url } 
                        alt="product" className="img">
                        </img>
                    </CardImage>
                    <CardDescription>
                        <p className="category">{ product.category }</p>
                        <p className="name">{ product.name }</p>
                    </CardDescription>
                </CardWrapper>
        )
    }
}

export default withRouter(Card)