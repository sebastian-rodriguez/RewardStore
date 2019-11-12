import styled from 'styled-components'

const ProductsWrapper = styled.div`
    width: 80%;
    height: 500px;
    background-color: #F8F8F8;
    padding: 10px;
    margin-left: 100px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-content: start;
    grid-gap: 20px;

    a{
        text-decoration: none;
    }

    a:hover{
        border: 2px solid orange;
        border-radius: 15px;
    }
`

export default ProductsWrapper