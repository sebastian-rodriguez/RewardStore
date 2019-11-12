import styled from 'styled-components'

export const CardWrapper = styled.div`
    height: 210px;
    width: 90%;
    padding: 10px 10px 20px 10px;
    background-color: white;
    box-shadow: 2px 2px 5px grey;
    border-radius: 5px;
    cursor: pointer;
    transition: box-shadow, margin-top 0.5s;

    :hover{
        box-shadow: 2px 2px 10px orange;
        margin-top: -8px;
    }
    
`
export const CardHeader = styled.div`
    height: 40px;
    width: 100%;
    background-color: inherit;
    display: flex;
    justify-content: flex-end;

    .priceContainer{
        height: 30px;
        width: 78px;
        margin-bottom: 5px;
        background-color: #44C5FD;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        

        .price{
            @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
            color: white;
            font-family: 'Varela Round', sans-serif;
            margin-right: 5px;
        }
    }

    .priceContainer-desactived{
        height: 30px;
        width: 78px;
        margin-bottom: 5px;
        background-color: #C6C5C5;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        

        .price-desactived{
            @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
            color: red;
            font-family: 'Varela Round', sans-serif;
            margin-right: 5px;
        }
    }

    
`

export const CardImage = styled.div`
    height: 120px;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    
    .img{
        height: 130px;
        width: 80%;
    }
`

export const CardDescription = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito|Raleway|Ubuntu&display=swap');
    height: 100px;
    width: 100%;
    margin-top: 15px;
    
    .category{
        font-family: 'Raleway', sans-serif;
        color: #CACACA;
        font-size: 12px;
    }

    .name{
        font-family: 'Nunito', sans-serif;
        color: #555555;
    }
`