import styled from 'styled-components'

import { focusStyle } from 'styles/commonStyle'

const Container = styled.div`
    width : 100% ;
`;

const LoginForm = styled.form.attrs(props => ({

}))`
    margin : 30px auto 0 auto ;
    width : 500px ;
`;

const IdLabel = styled.label.attrs(props => ({
    htmlFor : "id"
}))`

`;

const PasswordLabel = styled.label.attrs(props => ({
    htmlFor : "password"
}))`

`;

const IdInput = styled.input.attrs(props => ({
    id : "id",
    type : "id", 
    autocomplete : "off",
    required : "required",
    placeholder : "ID"
}))`

    display : block ;

    box-sizing : border-box ;

    width : 400px ;
    height : 30px ;

    padding : 5px 0 5px 10px ;

    border : 1px solid #D9D9D9 ;
    border-radius : 10px ;

    font-size : 18px ;
    color : #555555 ;


    ${focusStyle}

`;

const PasswordInput = styled.input.attrs(props => ({
    id : "password",
    type : "password",
    autocomplete : "off",
    required : "required",
    placeholder : "Password"
}))`

    display : block ;

    box-sizing : border-box ;

    width : 400px ;
    height : 30px ;

    margin-top : 20px ;
    padding : 5px 0 5px 10px ;

    border : 1px solid #D9D9D9 ;
    border-radius : 10px ;

    font-size : 18px ;
    color : #555555 ;

    ${focusStyle}

`;

const LoginButton = styled.button.attrs(props => ({
    type : "submit"
}))`

    width : 400px ;
    height : 30px ;

    margin-top : 30px ;

    border : none ;
    border-radius : 10px ;

    background-color : #0AA79B ;

    font-family : 'Poppins', sans-serif ;
    font-size : 16px ;
    font-weight : bold ;

    color : #FFFFFF ;

    cursor : pointer ;

`;

export {

    Container,
    LoginForm,
    IdLabel,
    PasswordLabel,
    IdInput,
    PasswordInput,
    LoginButton,

}