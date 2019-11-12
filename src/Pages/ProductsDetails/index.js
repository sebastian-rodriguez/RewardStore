import React,{ Component } from 'react'
import { connect } from 'react-redux'

//components
import Hero from '../../components/Hero'
import ResumePurchase from '../../components/ResumePurchase'

//actions
import getProductsItems from '../../store'

class ProductsDetails extends Component{
    state = {
        productsLoaded: false
    }

    handleReedem(){
        this.forceUpdate();
    }

    componentDidMount(){
        const { getProductsItems } = this.props

        try {
            getProductsItems();
        } catch (error) {
            console.log(error)        
        }finally{
            this.setState({ productsLoaded: true })
        }

    }

    render(){
        
        const { products } = this.props;
        const { productsLoaded } = this.state;
        const { id } = this.props.match.params;
        const product = products.filter( product => product._id === id);
      
        return(
            <div>
                { 
                    !productsLoaded ? <h2>cargando</h2> : (
                        <div>
                            <Hero title={ product[0] && product[0].name }></Hero>
                            <ResumePurchase product={ product[0] } handleReedem={ this.handleReedem }></ResumePurchase>
                        </div>  
                    ) 
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductsItems: () => dispatch(getProductsItems)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetails)