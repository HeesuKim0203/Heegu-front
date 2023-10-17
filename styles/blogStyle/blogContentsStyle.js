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

`;

const BlogContentsItemsTextArea = styled.div`
    width : 480px ;
    margin-right : 30px ;
`;

const BlogContentsItemsTitle = styled.h3`
    font-size : 20px ;
    font-weight : bold ;

    line-height : 175% ;
`;

const BlogContentsItemsImage = styled(UrlImage)`
    width : 378px ;
    height : 240px ;
`;

const BlogContentsItemsDescription = styled.p`
    font-size : 15px ;
    font-weight : bold ;

    line-height : 180% ;

    margin-top : 15px ;

    color : #555555 ;


`;

const BlogContentsItemsDate = styled.p`
    
    font-size : 15px ;
    font-family : 'Poppins', sans-serif ;

    margin-top : 25px ;
    
    color : #999999 ;

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