import React, { Component } from 'react'
import { connect } from 'react-redux'

//actions
import { changeProductsOrder } from '../../store/index';

//components
import FiltersWrapper from './styled'

class Filters extends Component {
    
    render(){

        const { orderBy, dispatch } = this.props

        return(
            <FiltersWrapper>
                <p>Sort By</p>
                <button className={ orderBy === 'lowest_price' ? 'btn-option-active' : 'btn-option'} onClick={ () => dispatch(changeProductsOrder('lowest_price')) }>
                    Lowest Price
                </button>
                <button className={ orderBy === 'highest_price' ? 'btn-option-active' : 'btn-option'} onClick={ () => dispatch(changeProductsOrder('highest_price')) }>
                    Highest Price
                </button>
            </FiltersWrapper>
        )
    }        
    
}

const mapStateToProps = (state) => {
    return {
        orderBy: state.orderBy
    }
}

export default connect(mapStateToProps)(Filters)