import React,{ Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

//styled components
import {
    PurchasesListWrapper,
    PurchasesLisTitle,
    PurchasesList,
    ProductCardWrapper,
    ProductCardImage,
    ProductCardDescription
} from './styled';


class Purchases extends Component{
    
    sortByDate(array){
       return array.sort(function (a, b) {
           return (a.cost - b.cost)
       })
    }

    render(){

        const { user } = this.props;
        
        return ( 
        <div>
            <PurchasesListWrapper>
            <PurchasesLisTitle> <h2>Your Purchases</h2>  </PurchasesLisTitle>
            {
                !user ? <p>Loading</p> :
                <PurchasesList>
                {
                    user.redeemHistory.reverse().map(redeem => (
                        <ProductCardWrapper key={ redeem.createDate }>
                            <ProductCardImage>
                                <img src={ redeem.img.url } alt={ redeem.name }/>
                            </ProductCardImage>
                            <ProductCardDescription>
                                <p className="title">{ redeem.name }</p>
                                <p className="time">{ moment(redeem.createDate).fromNow() }</p>
                            </ProductCardDescription>
                        </ProductCardWrapper>     
                    ))
                }
            </PurchasesList>
            }
        </PurchasesListWrapper>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
} 

export default connect(mapStateToProps)(Purchases);