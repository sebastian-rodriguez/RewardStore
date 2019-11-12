import styled from 'styled-components'

export const ResumePurchaseWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Nunito|Raleway|Ubuntu&display=swap');
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 200px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    background-color: white;
    
    -webkit-box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.75);
    box-shadow: 4px 3px 7px 0px rgba(0,0,0,0.75);
`
export const ResumeItemsContainer = styled.div`
    width: 50%;
    height: 100%;
    padding-left: 15px;
    padding-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ImageAndButtonContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .image{
        width: 210px;
        height: 160px;
        margin-left: auto;
        margin-right: auto;
    }

    .button{
        background-color: #F89A30;
        width: 210px;
        height: 40px;
        border-radius: 20px;
        border: 0px;
        outline: 0 none;
        margin-left: auto;
        margin-right: auto;
        color: white;
        font-family: 'Raleway', sans-serif;

        :hover{
            background-color: #E38D2C;
            cursor: pointer;
        }
    }

    .button-disabled{
        background-color: #D6D4D2;
        width: 210px;
        height: 40px;
        border-radius: 20px;
        border: 0px;
        outline: 0 none;
        margin-left: auto;
        margin-right: auto;
        color: white;
        font-family: 'Raleway', sans-serif;
    }

`

export const ResumeItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;

    .title{
        color: grey;
    }

    .result{
        color: #F89A30;
    }
`

