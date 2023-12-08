import styled from 'styled-components'
import Link from 'next/link'

import { animation } from 'styles/commonStyle'

// About Style

const Wrap = styled.div`

`;

const Container = styled.div`
    display : flex ;
    flex-direction : column ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        overflow : hidden ;
    }
`;

const Header = styled.div`
    width : 828px ;

    ${animation}

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        box-sizing: border-box ;
        padding : 0 20px ;
    }
`;

const Title = styled.h2`
    font-family : 'Poppins', sans-serif ;
    font-size : 50px ;
    font-weight : bold ;

    user-select : none ;
    line-height : 150% ;

    @media ${props => props.theme.mobileL} {
        font-size : 26px ;
    }
`;

const Contents = styled.div`
    margin-top : 50px ;

    ${animation}

    @media ${props => props.theme.mobileL} {
        margin-top : 15px ;
    }
`;

const AuthorImage = styled.div`
    width : 100% ;
    height : 425px ;
    border-radius : 10px ;

    ${ props => (
        props.src ? `background-image : url(${ props.src }) ;` : `background-color : #eeeeee ;`
    )}

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        height : 200px ;
        background-position : 25% 30% ;
        border-radius : 0px ;
    }
`;

const Footer = styled.div`
    display : flex ;
    justify-content : end ;

    margin-top  : 10px ;
    ${animation}

    @media ${props => props.theme.mobileL} {
        justify-content : start ;
        box-sizing: border-box ;
        padding : 0 20px ;
    }
`;

const AuthorTextArea = styled.div`
    display : flex ;
    flex-direction : column ;
`;

const Greeting = styled.p`
    font-family : 'Poppins', sans-serif ;
    font-size : 17px ;
    font-weight : bold ;
    
    text-align : right ;

    padding : 10px 0 0 0 ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 14px ;
        padding : 0 ;
        text-align : left ;
    }
`;

const Introductory = styled.p`
    padding : 10px 0 0 0 ;

    width : 458px ;

    text-align : right ;

    font-size : 15px ;
    user-select : none ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        font-size : 12px ;
        padding : 3px 0 0 0 ;
        text-align : left ;
    }
`;

const UrlTextArea = styled.div`
    margin-top : 15px ;

    @media ${props => props.theme.mobileL} {
        margin-top : 5px ;
    }
`;

const UrlText = styled.p`
    display : block ;
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;
    text-align : right ;

    color : #444444 ;
    
    font-weight : lighter ;
    cursor : unset ;

    @media ${props => props.theme.mobileL} {
        padding : 5px 0 0 0 ;
        text-align : left ;

        font-size : 10px ;
    }
`;

const UrlLink = styled(Link)`
    display : block ;
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;
    text-align : right ;

    color : #444444 ;
    
    font-weight : lighter ;

    @media ${props => props.theme.mobileL} {
        padding : 5px 0 0 0 ;

        text-align : left ;

        font-size : 10px ;
    }
`;

//


export {
    
    Wrap,
    Container,
    Header,
    Title,
    Contents,
    AuthorImage,
    Footer,
    AuthorTextArea,
    Greeting,
    Introductory,
    UrlTextArea,
    UrlText,
    UrlLink
}