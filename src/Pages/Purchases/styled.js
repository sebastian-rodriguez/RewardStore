import styled from 'styled-components';

export const PurchasesListWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito|Raleway|Ubuntu&display=swap');
    width: 80%;
    padding: 20px;
    background-color: white;
    margin: 20px auto 20px auto;


    -webkit-box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.75);
    box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.75);
`
export const PurchasesLisTitle = styled.div`
    display: flex;
    justify-content: start;
    border-bottom: 1px solid #E6E6E6;

    h2{
        font-family: 'Raleway', sans-serif;
        padding-bottom: 10px;
    }
`

export const PurchasesList = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 15px;

`

export const ProductCardWrapper = styled.div`
    border-radius: 5px;
    padding: 10px;
    box-shadow: 2px 2px 5px grey;
`

export const ProductCardImage = styled.div`
    display: flex;
    justify-content: center;
    
    img{
        width: 200px;
        height: 170px;
        margin-right: auto;
        margin-left: auto;
    }
` 

export const ProductCardDescription = styled.div`
    border-top: 1px solid #E6E6E6;

    .title{
        font-family: 'Nunito', sans-serif;
        color: #555555;
        padding-top: 10px;
    }

    .time{
        font-family: 'Raleway', sans-serif;
        color: #CACACA;
        font-size: 12px;
    }

`