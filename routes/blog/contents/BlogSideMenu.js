import { useEffect, useState } from 'react';
import TitleComponent from 'components/TitleComponent'

import {

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

} from 'styles/blogStyle/blogSideMenuStyle' ;
import { useRouter } from 'next/router';

function BlogSideMenu({
    blogBigMenu,
    blogSideMenuTitle,
    ballon,
    blogsType,
    language
}) {
    const router = useRouter() ;
    const [ menuStatus, setMenuStatus ] = useState(null) 

    // Initialization menuStatus
    useEffect(() => {
        
        blogBigMenu && setMenuStatus(blogBigMenu.reduce((array, value, index) => {

            array[index] = value.status ; 

            return array ;

        }, [])) ;

    }, [ language ]) ;

    function BlogSideBigMenuTitleContainerOnClick(event, index) {

        setMenuStatus([
            ...menuStatus.slice(0, index),
            (menuStatus[index] ? 0 : 1), 
            ...menuStatus.slice(index + 1, menuStatus.length)
        ]) ;
    }

    return (
        <BlogSideMenuWrap>
            <TitleComponent title = { blogSideMenuTitle } />
            <BlogSideMenuContainer>
                { menuStatus && blogBigMenu && 
                    blogBigMenu.map((value, index) => {

                        const smallMenuStatus = value.smallMenu.length !== 0 ;

                        return (
                            <BlogSideBigMenu
                                key = { index }
                            >
                                <BlogSideBigMenuTitleArea
                                    onClick = { smallMenuStatus ? (event => BlogSideBigMenuTitleContainerOnClick(event, index)) : () => {} }
                                >
                                    <BlogSideBigMenuTitle>
                                        { value.name }
                                        { (index !== 0 && !smallMenuStatus) && <Ballon> { ballon } </Ballon> }
                                    </BlogSideBigMenuTitle>
                                    { smallMenuStatus && 
                                        <BlogSideBigMenuButton 
                                            menustatus = { menuStatus[index] }
                                        /> 
                                    }
                                </BlogSideBigMenuTitleArea>
                                <BlogSideSmallMenuArea>
                                    { (index !== 0) ?
                                        value.smallMenu.map((value, index) => {
                                            return (
                                                <BlogSideSmallMenuLink
                                                    key = { index }
                                                    href = { `/blog?type=${ value }` }
                                                    locale = { language }
                                                >
                                                    <BlogSideSmallMenu
                                                        select = { Number(router.query.type) === (index + 1) ? 1 : 0 }
                                                    >
                                                        { value }
                                                    </BlogSideSmallMenu>
                                                </BlogSideSmallMenuLink>
                                            ) ;
                                        }) : (
                                            blogsType.map((value, index) => {
                                                return (
                                                    <BlogSideSmallMenuLink
                                                        key = { index }
                                                        href = { `/blog?type=${ value }` }
                                                        locale = { language }
                                                    >
                                                        <BlogSideSmallMenu
                                                            select = { Number(router.query.type) === (index + 1) ? 1 : 0 }
                                                        >
                                                            { value }
                                                        </BlogSideSmallMenu>
                                                    </BlogSideSmallMenuLink>
                                                ) ;
                                            })
                                        )
                                    }
                                </BlogSideSmallMenuArea>
                            </BlogSideBigMenu>
                        ) ;
                    }) 
                }
            </BlogSideMenuContainer>
        </BlogSideMenuWrap>
    );
}

export default BlogSideMenu;