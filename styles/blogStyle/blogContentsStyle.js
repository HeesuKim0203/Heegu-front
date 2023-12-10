import styled from 'styled-components'
import Link from 'next/link'

import { UrlImage } from 'styles/commonStyle'

const BlogContentsMain = styled.div`

`;

const BlogContentsItemLink = styled(Link)`
    display : block ;
`;

const BlogContentsItems = styled.div`
    display : flex ;

    padding : 40px 0 ;    
    border-bottom : 1px solid #DDDDDD ;

    cursor : pointer ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        flex-direction : column-reverse ;
    }

`;

const BlogContentsItemsTextArea = styled.div`
    width : 480px ;
    margin-right : 30px ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        margin-right : 0 ;
        padding : 0 20px ;
        box-sizing: border-box;
    }
`;

const BlogContentsItemsTitle = styled.h3`
    font-size : 20px ;
    font-weight : bold ;

    line-height : 175% ;

    @media ${props => props.theme.mobileL} {
        font-size : 16px ;
    }
`;

const BlogContentsItemsImage = styled.img`
    width : 378px ;
    height : 240px ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        height : 240px ;
        box-sizing: border-box;
        margin : 0 auto ;
    }
`;

const BlogContentsItemsDescription = styled.p`
    font-size : 15px ;
    font-weight : bold ;

    line-height : 180% ;

    margin-top : 15px ;

    color : #555555 ;

    @media ${props => props.theme.mobileL} {
        font-size : 12px ;
    }
`;

const BlogContentsItemsDate = styled.p`
    
    font-size : 15px ;
    font-family : 'Poppins', sans-serif ;

    margin-top : 25px ;
    
    color : #999999 ;

    @media ${props => props.theme.mobileL} {
        font-size : 12px ;
    }

`;

export {

    BlogContentsMain,
    BlogContentsItems,
    BlogContentsItemLink,
    BlogContentsItemsTextArea,
    BlogContentsItemsTitle,
    BlogContentsItemsImage,
    BlogContentsItemsDescription,
    BlogContentsItemsDate,

}