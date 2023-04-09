import BlogContents from 'routes/blog/contents/BlogContents'
import BlogSideMenu from 'routes/blog/contents/BlogSideMenu'

import { PageContainer } from 'styles/GlobalStyle'
import { Wrap, BlogWrap } from 'styles/commonStyle'

import Header from 'components/Header'
import Footer from 'components/Footer'
import BlogHeader from 'components/BlogHeader'

import { setDataLanguage } from 'util/data'
import {

    blogBigMenu, 
    blogSideMenuTitle, 
    ballon,

    numberOfBlogs

} from 'util/text'

function BlogContainer({ 
    data : {
        blogs
    },
    language,
}) {

    return (
        <>
        { language &&
            <>
                <Header language = { language } />
                <PageContainer
                    language = { language }
                >
                    <Wrap>
                        <BlogSideMenu 
                            blogBigMenu = { blogBigMenu[language] }
                            blogSideMenuTitle = { blogSideMenuTitle } 
                            ballon = { ballon[language] }
                            language = { language }
                        />
                        <BlogWrap>
                            <BlogHeader 
                                numberOfBlogs = { numberOfBlogs[language] }
                                blogNum = { setDataLanguage(blogs, language).length }
                            />
                            <BlogContents 
                                language = { language }
                                blogs = { setDataLanguage(blogs, language) }
                            />
                        </BlogWrap>
                    </Wrap>
                </PageContainer>
                <Footer />
            </>
            }
        </>
    );
}

export default BlogContainer ;