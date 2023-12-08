import dynamic from 'next/dynamic'
import { memo, useEffect } from 'react'

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
import { BASE_URL } from 'util/api'

const MarkdownPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
);

const Image = memo((props) => {

    const { className, src, alt, width, height, style } = props ;

    return (
        <img 
            className={className} 
            src={`${BASE_URL}/image${src}`} 
            alt={alt}
            width={width}
            height={height}
            style={style}
         />
    )
}) ;

const H2 = ({ setBlogWritingContentsLoad, ...props }) => {

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

        if( e.currentTarget.className != 'anchor' ) {
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
        <BlogWritingContentsContainer
            data-color-mode="light"
        >
            <BlogWritingContentsHeader>
                <BlogWritingContentsTitle>{ blogs.title }</BlogWritingContentsTitle>
                <BlogWritingContentsDate>{ blogs.date }</BlogWritingContentsDate>
            </BlogWritingContentsHeader>
            <BlogWritingContentsMain>
                <MarkdownPreview 
                    source = { blogs.description }
                    
                    style = {{
                        fontFamily : 'inherit',
                        backgroundColor : '#FAFAFA'
                    }}
                    components={{
                        a : ({ node, ...props }) =>  
                            <a 
                                onClick = { markDownlinkTarget }
                                { ...props }
                            />,
                        h2 : ({ node, ...props }) =>
                            <H2
                                setBlogWritingContentsLoad = { setBlogWritingContentsLoad }
                                { ...props }
                            />,
                        img : ({ node, ...props }) => 
                            <Image
                                { ...props }
                                style = {{
                                    borderRadius : "10px",
                                    margin : "10px 0"
                                }}
                            />,
                        code : ({ node, ...props}) =>
                            <code
                                { ...props }
                            >
                            </code>
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
                                            href = { `/blog/${value.id}` }
                                            locale = { language }
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