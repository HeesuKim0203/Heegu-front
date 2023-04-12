import dynamic from 'next/dynamic'
import { useEffect } from 'react'

import Loader from 'components/Loader'
import { 

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

} from 'styles/blogStyle/blogWritingContents'

const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
);

const H1 = ({ setBlogWritingContentsLoad, ...props }) => {

    // MarkDown preview loading status
    useEffect(() => {
        setBlogWritingContentsLoad && setBlogWritingContentsLoad(true) ;
    }, [ setBlogWritingContentsLoad ]) ;

    return (
        <h1 
            { ...props }
        />
    )
}

function BlogWritingContents({
    language,
    blogs,
    relatedBlogs,
    relatedWriting,
    blogWritingContentsLoad,
    setBlogWritingContentsLoad
}) {
 
    function markDownlinkTarget(e) {

        e.preventDefault() ;

        if(e.currentTarget.className != 'anchor') {
            window.open(e.currentTarget.href, '_blank') ;
        }else {
            window.scroll({
                behavior : 'smooth',
                left : 0,
                top : window.pageYOffset + e.currentTarget.getBoundingClientRect().top - 150
            }) ;
        }

    }

    return (
        <BlogWritingContentsContainer>
            <BlogWritingContentsHeader>
                <BlogWritingContentsTitle>{ blogs.title }</BlogWritingContentsTitle>
                <BlogWritingContentsDate>{ blogs.date }</BlogWritingContentsDate>
            </BlogWritingContentsHeader>
            <BlogWritingContentsMain>
                <MarkdownPreview 
                    source = { blogs.description }
                    style = {{
                        backgroundColor : '#FAFAFA',
                        fontFamily : 'inherit',
                    }}
                    components={{
                        a : ({ node, ...props }) =>  
                            <a 
                                onClick = { markDownlinkTarget }
                                { ...props }
                            />,
                        h1 : ({ node, ...props }) =>
                            <H1
                                setBlogWritingContentsLoad = { setBlogWritingContentsLoad }
                                { ...props }
                            />
                    }}
                />
                { !blogWritingContentsLoad && <Loader small = "700px" />}
            </BlogWritingContentsMain>
            <BlogWritingContentsFooter>
                { relatedBlogs.length >= 1 && 
                    <>
                        <BlogWritingContentsFooterTitle>{ relatedWriting }</BlogWritingContentsFooterTitle>
                        <BlogWritingContentsFooterItemsContainer>
                            {
                                relatedBlogs.map((value, index) => {
                                    return (
                                        <BlogWritingContentsFooterItemLink
                                            key = { index }
                                            href = { `/${language}/blog/${value.id}` }
                                        >
                                            <BlogWritingContentsFooterItem>
                                                <BlogWritingContentsFooterItemTitle>{ value.title }</BlogWritingContentsFooterItemTitle>
                                                <BlogWritingContentsFooterItemDate>{ value.date }</BlogWritingContentsFooterItemDate>
                                            </BlogWritingContentsFooterItem>
                                        </BlogWritingContentsFooterItemLink>
                                    ) ;
                                })
                            }
                        </BlogWritingContentsFooterItemsContainer>
                    </>
                }
            </BlogWritingContentsFooter>
        </BlogWritingContentsContainer>
    );
}

export default BlogWritingContents ;