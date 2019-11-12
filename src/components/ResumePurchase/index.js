import React, { Component } from 'react';
import { connect } from 'react-redux';

//assets
import spinner from '../../assets/spinners/three-dots.svg'

// api
import api from '../../utils/api'

//actions
import { getUser } from '../../store'

//styled components
import {
    ResumePurchaseWrapper,
    ResumeItemsContainer,
    ImageAndButtonContainer,
    ResumeItem
} from './styled'

class ResumePurchase extends Component{
    
    state = {
        redeemingProduct: false
    }
    
    async handleReedemProduct(id){
        const { getUser } = this.props;

        try {
            this.setState({
                redeemingProduct: true
            })

            const response = await api.redeemProduct(id);
            const result = await response;

            if (!result.message === "You 've redeem the product successfully") {
                alert('A error ocurred at try reedem the product');
            }else{
                getUser()
                alert(result.message);
            }
            
        } catch (error) {
            console.log(error);
        } finally{
            this.setState({
                redeemingProduct: false
            })
        }

        
    }

    render(){
        
        const { product, user } = this.props;
        const { redeemingProduct } = this.state;

        return(
            <ResumePurchaseWrapper>
                <ResumeItemsContainer>
                    <ResumeItem>
                        <h3 className="title">AVAILABLE POINTS</h3>
                        <h3 className="result">{ user && user.points }</h3>
                    </ResumeItem>
                    <ResumeItem>
                        <h3 className="title">COST OF PRODUCT</h3>
                        <h3 className="result">{ product && product.cost }</h3>
                    </ResumeItem>
                    <ResumeItem>
                        <h3 className="title">YOUR BALANCE AFTER THE PURCHASE</h3>
                        <h3 className="result">{  user && user.points - product.cost }</h3>
                    </ResumeItem>
                </ResumeItemsContainer>
                <ImageAndButtonContainer>
                    <img src={ product && product.img.url } alt="" className="image"></img>
                    {
                        user.points < product.cost ? 
                        <button className="button-disabled" disabled="true" onClick={ () => this.handleReedemProduct(product._id) }>
                            Without enough points
                        </button> :
                        <button className="button"  onClick={ () => this.handleReedemProduct(product._id) }>
                        { redeemingProduct ?  <img src={ spinner } alt="spinner"/> : 'REEDEM NOW' }
                        </button>
                    }
                </ImageAndButtonContainer>
            </ResumePurchaseWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser : () => dispatch(getUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumePurchase);