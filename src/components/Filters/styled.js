import styled from 'styled-components'

const FiltersWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito|Raleway|Ubuntu&display=swap');
    width: 80%;
    height: 50px;
    background-color: #F8F8F8;
    margin-top: 20px;
    margin-left: 100px;
    border-bottom: 1px solid #E6E6E6;
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .btn-option{
        font-family: 'Ubuntu', sans-serif;
        padding: 10px;
        border-radius: 20px;
        border: none;
        background-color: #C6C5C5;
        color: #575656;
        text-decoration: none;
        margin-left: 15px;
        cursor: pointer;
    }

    .btn-option:focus{
        outline: 0;
    }

    .btn-option:hover{
        background-color: #B8B8B8;
    }

    .btn-option-active{
        font-family: 'Ubuntu', sans-serif;
        padding: 10px;
        border-radius: 20px;
        border: none;
        background-color: #4EC8EE;
        color: white;
        text-decoration: none;
        margin-left: 15px;
        cursor: pointer;
    }

    .btn-option-active:focus{
        outline: 0;
    }
`
export default FiltersWrapper