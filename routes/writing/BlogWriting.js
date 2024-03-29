import BlogWritingContents from 'routes/writing/contents/BlogWritingContents'
import BlogSideMenu from 'routes/blog/contents/BlogSideMenu'

import { PageContainer } from 'styles/GlobalStyle'
import { Wrap, BlogWrap, BlogPageWrap } from 'styles/commonStyle'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { setDataLanguage } from 'util/data'
import {

    blogBigMenu, 
    blogSideMenuTitle, 
    ballon,

    numberOfBlogs,
    relatedWriting,
    BLOGTYPE

} from 'util/text'
import { useEffect, useState } from 'react'

function BlogWriting({
    data : {
        blogs
    },
    language
}) {

    const [ blogWritingContentsLoad, setBlogWritingContentsLoad ] = useState(false) ;

    return (
        <>
        { language && (
            <>
                <Header language = { language } />
                <PageContainer
                    language = { language }
                >
                    <Wrap>
                        <BlogPageWrap>
                            <BlogSideMenu 
                                blogBigMenu = { blogBigMenu[language] }
                                blogSideMenuTitle = { blogSideMenuTitle } 
                                ballon = { ballon[language] }
                                blogsType = { BLOGTYPE }
                                language = { language }
                            />
                            <BlogWrap>
                                <BlogWritingContents 
                                    language = { language }
                                    relatedWriting = { relatedWriting[language] }
                                    blogs = { setDataLanguage(blogs, language)[0] }
                                    relatedBlogs = { setDataLanguage(blogs, language).slice(1, 3) }
                                    blogWritingContentsLoad = { blogWritingContentsLoad }
                                    setBlogWritingContentsLoad = { setBlogWritingContentsLoad }
                                />
                            </BlogWrap>
                        </BlogPageWrap>
                        <Footer />
                    </Wrap>
                </PageContainer>
            </>
            )
        }
        </>
    );
}

export default BlogWriting;
