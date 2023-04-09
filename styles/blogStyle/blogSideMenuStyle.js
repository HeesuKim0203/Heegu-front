import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import blogSideMenuOn from 'public/blog_side_menu_on.svg'
import blogSideMenuOff from 'public/blog_side_menu_off.svg'

const BlogSideMenuWrap= styled.div`
    margin-right : 130px ;

    position : fixed ;
`;

const BlogSideMenuContainer= styled.div`
    width : 174px ;
`;

const BlogSideBigMenu = styled.div`

`;

const BlogSideBigMenuTitleArea = styled.div`
    display : flex ;

    padding : 0 5px 20px 5px ;
    margin-top : 30px ;

    border-bottom : 1px solid #000000 ;

    &:hover {
        .ballon {
            display : block ;
            position : absolute ;
            width : 82px ; 
            height : 28px ;
            left : 0px ;
            top : -40px ;
            background : #0AA79B ;
            color : #FAFAFA ;
            border-radius : 5px ;

            font-size : 13px ;
            text-align : center ;
            line-height : 26px ;

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

const BlogSideBigMenuTitle = styled.h3`
    flex : 1 ;
    
    font-size : 18px ;
    font-weight : 600 ;

    position : relative ;

    user-select : none ;

`;

const BlogSideBigMenuButton = styled(Image).attrs(props => ({
    src : props.menustatus ? blogSideMenuOn : blogSideMenuOff,
    alt : "Blog side menu status icon",
}))`

`;

const Ballon = styled.div.attrs(props => ({
    className : "ballon"
}))`
    display : none ;
`;

const BlogSideSmallMenuArea = styled.ul`

`;

const BlogSideSmallMenuLink = styled(Link)` 
    display : block ;
`;

const BlogSideSmallMenu = styled.li`
    margin-top : 20px ;

    font-size : 15px ;
    font-weight : bold ;

    color : ${props => props.select ? "#0AA79B" : "#777777" } ;
`;

export {

    BlogSideMenuWrap,
    BlogSideMenuContainer,
    BlogSideBigMenu,
    BlogSideBigMenuTitleArea,
    BlogSideBigMenuTitle,
    BlogSideBigMenuButton,
    Ballon,
    BlogSideSmallMenuArea,
    BlogSideSmallMenuLink,
    BlogSideSmallMenu,

} 