import styled from 'styled-components'

import {

    ContentsContainer,
    Contents,
    ItemContainer,
    focusStyle,

} from 'styles/commonStyle'

// Contact us Style

const Wrap = styled(ContentsContainer)`
    
`;

const Contaienr = styled(Contents)`

`;

const FormArea = styled(ItemContainer)`

`;

const Form = styled.form`

`;

const Fieldset = styled.fieldset`

`;

const InputTitle = styled.input`
    display : block ;

    box-sizing : border-box ;

    width : 100% ;
    height : 65px ;

    padding-left : 30px ;

    border : 1px solid #D9D9D9 ;
    border-radius : 10px ;

    font-size : 18px ;
    color : #555555 ;


    font-family : ${props => props.theme[props.language]} ;

    ${ focusStyle }
`;

const InputText = styled.textarea`
    display : block ;

    box-sizing : border-box ;

    width : 100% ;
    height : 300px ;

    margin-top : 15px ;
    padding : 20px 30px ;

    border : 1px solid #D9D9D9 ;
    border-radius : 10px ;

    font-size : 18px ;
    color : #555555 ;

    resize : none ; 

    font-family : ${props => props.theme[props.language]} ;

    ${ focusStyle }

`;

const Button = styled.button`
    position : relative ;

    width : 100% ;
    height : 65px ;

    margin-top : 30px ;

    border : none ;
    border-radius : 10px ;

    background-color : #0AA79B ;

    font-family : 'Poppins', sans-serif ;
    font-size : 16px ;
    font-weight : bold ;

    color : #FFFFFF ;

    cursor : pointer ;

    &:hover {
        .ballon {
            display : block ;
            position : absolute ;
            width : 82px ; 
            height : 28px ;
            left : 580px ;
            top : -40px ;
            background : #0AA79B ;
            color : #FAFAFA ;
            border-radius : 5px ;

            font-size : 13px ;
            text-align : center ;
            line-height : 28px ;

            &::after {
                border-top : 5px solid #0AA79B ;
                border-left : 5px solid transparent ;
                border-right : 5px solid transparent ;
                border-bottom : 0px solid transparent ;

                content : "";
                position : absolute ;
                top : 28px ;
                left : 15px ;
            }
        }
    }
`;

const Ballon = styled.div.attrs(props => ({
    className : "ballon"
}))`
    display : none ;
`;

//

export {

    Wrap,
    Contaienr,
    FormArea,
    Form,
    Fieldset,
    InputTitle,
    InputText,
    Button,

    Ballon

}