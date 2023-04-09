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

import dynamic from 'next/dynamic'

const Markdown = dynamic(
    () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
    { ssr: false }
);

function BlogWritingContents({
    language,
    blogs
}) {

    function markDownlinkTarget(e) {
        e.preventDefault() ;
        window.open(e.target.href, '_blank') ;
    }

    return (
        <BlogWritingContentsContainer>
            <BlogWritingContentsHeader>
                <BlogWritingContentsTitle>{ blogs.title }</BlogWritingContentsTitle>
                <BlogWritingContentsDate>{ blogs.date }</BlogWritingContentsDate>
            </BlogWritingContentsHeader>
            <BlogWritingContentsMain>
                <Markdown 
                    source = { blogs.description } 
                    style = {{
                        backgroundColor : '#FAFAFA',
                        padding : '10px',
                        fontFamily : 'Poppins'
                    }}
                    components={{
                        a : ({ node, ...props }) =>  
                            <a 
                                onClick={ markDownlinkTarget }  
                                { ...props }
                            />,
                        // img : ({node, ...props}) => 
                        //     <LazyImage 
                        //         {...props} 
                        //     />
                    }}
                />
            </BlogWritingContentsMain>
            <BlogWritingContentsFooter>
                <BlogWritingContentsFooterTitle>관련글</BlogWritingContentsFooterTitle>
                <BlogWritingContentsFooterItemsContainer>
                    {
                        blogs.realtedWrting.map((value, index) => {
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
            </BlogWritingContentsFooter>
        </BlogWritingContentsContainer>
    );
}

export default BlogWritingContents ;