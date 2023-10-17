import styled from 'styled-components'

import { focusStyle } from 'styles/commonStyle'

const Container = styled.div`

`;

const WritingContainer = styled.div`

`;

const FormContainer = styled.div`

`;

const Form = styled.form`

    display : block ;
    width : 1000px ;

`;

const Fieldset = styled.fieldset`
    
`;

const Input = styled.input`

    display : block ;

    box-sizing : border-box ;

    width : 100% ;
    height : 30px ;

    padding : 0 7px ;
    margin : 10px 10px ;

    border : 1px solid #D9D9D9 ;
    border-radius : 10px ;

    font-size : 18px ;
    color : #555555 ;

    ${ focusStyle }
`;

const InputTitle = styled(Input)`

`;

const TypeSelect = styled.select`

    border : 1px solid #D9D9D9 ;

    margin : 10px 10px ;
    padding : 3px 10px ;

    font-size : 18px ;

    ${ focusStyle }

`;

const TypeOption = styled.option`

`;

const InputImage = styled(Input)`

`;

const KRDescriptionInput = styled(Input)`

`;

const JPDescriptionInput = styled(Input)`

`;

const Button = styled.button`
    position : relative ;

    width : 100% ;
    height : 30px ;

    margin : 10px 10px ;
    padding : 3px 10px ;

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
    WritingContainer,
    FormContainer,
    Form,
    Fieldset,

    InputTitle,
    TypeSelect,
    TypeOption,
    InputImage,
    KRDescriptionInput,
    JPDescriptionInput,
    Button
}