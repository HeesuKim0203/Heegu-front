import styled from 'styled-components'
import Link from 'next/link'

const BlogWritingContentsContainer = styled.div`
    margin-top : 25px ;
    width : 760px ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        padding : 0 20px ;
        box-sizing : border-box ;
    } 
`;

const BlogWritingContentsHeader = styled.div`

`;

const BlogWritingContentsTitle = styled.h1`
    font-size : 44px ;
    font-weight : bold ;

    line-height : 180% ;
    
    font-family: 'Poppins', sans-serif ;
`;

const BlogWritingContentsDate = styled.p`
    display : block ;

    margin-top : 15px ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    text-align : right ;

    color : #999999 ;
`;

const BlogWritingContentsMain = styled.div`
    margin-top : 30px ;

    font-size : 15px ;
    line-height : 180% ;

    color : #555555 ;
`;

const BlogWritingContentsFooter = styled.div`
    margin : 145px 0 80px 0 ;
`;

const BlogWritingContentsFooterTitle = styled.h3`
    font-size : 14px ;
    font-weight : bold ;
    
    line-height : 175% ;

    font-family : inherit ;
`;

const BlogWritingContentsFooterItemsContainer = styled.div`
    margin-top : 30px ;
    padding : 30px 0 ;
    border-top : 1px solid #DDDDDD ;
`;

const BlogWritingContentsFooterItemLink = styled(Link)`
    display : block ;
`;

const BlogWritingContentsFooterItem = styled.div`
    display : flex ;
`;

const BlogWritingContentsFooterItemTitle = styled.h2`
    font-size : 20px ;
    font-weight : bold ;
    
    line-height : 175% ;

    flex : 1 ;
`;

const BlogWritingContentsFooterItemDate = styled.p`
    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;
    color : #999999 ;

    line-height : 40px ;
`;

export {

    BlogWritingContentsContainer,
    BlogWritingContentsHeader,
    BlogWritingContentsTitle,
    BlogWritingContentsDate,
    BlogWritingContentsMain,
    BlogWritingContentsFooter,

    BlogWritingContentsFooterTitle,
    BlogWritingContentsFooterItemLink,
    BlogWritingContentsFooterItemsContainer,
    BlogWritingContentsFooterItem,
    BlogWritingContentsFooterItemTitle,
    BlogWritingContentsFooterItemDate,

}