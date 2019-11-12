import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 75px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.div`
    height: 50px;
    width: 100px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const User = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito|Raleway|Ubuntu&display=swap');
    height: 50px;
    width: 200px;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .creditsContainer{
        @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
        width: 80px;
        background-color: #EBE9E8;
        padding: 5px 5px 5px 7px;
        border-radius: 20px;
        font-family: 'Varela Round', sans-serif;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
    }
    
    .userName{
        font-family: 'Nunito', sans-serif;
        color: #555555;
        cursor: pointer;

        :hover{
            text-decoration: underline;
        }
    }
`