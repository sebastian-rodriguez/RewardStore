import React, { Component } from 'react'
import { connect } from 'react-redux';

//components
import Hero from '../../components/Hero'
import Filters from '../../components/Filters'
import ProductsList from '../../components/ProductsLIst';

//styled components
import SpinnerContainer from './styled';

//assets
import loadingProductsSpinner from '../../assets/spinners/oval2.svg'

//actions
import { getProductsItems } from '../../store';

class Products extends Component {
    
    changeOrderProducts(productsArray, orderBy){
        switch (orderBy) {
            case 'lowest_price': {
                return productsArray.sort(function(a, b){
                    return (a.cost - b.cost)
                })
            }
            case 'highest_price': {
                return productsArray.sort(function (a, b) {
                    return (b.cost - a.cost)
                })
            }
            default: {
                return productsArray
            }
        }
    }

    async componentDidMount() {
        const { getProductsItems } = this.props;

        try {
            getProductsItems()
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        const { products, orderBy, user, productsLoaded } = this.props;
        const sortedProducts = this.changeOrderProducts(products, orderBy)

        return(
            <div>
                <Hero title="Electronic"></Hero>
                <Filters></Filters>
                { !productsLoaded && <SpinnerContainer> <img src={ loadingProductsSpinner } alt="loading"/> </SpinnerContainer>}
                <ProductsList products={ sortedProducts } user={ user } ></ProductsList>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        products: state.products,
        orderBy: state.orderBy,
        user: state.user,
        productsLoaded: state.productsLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductsItems: () => dispatch(getProductsItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);