import {

    BlogContentsHeader,
    BlogContentsMember,
    BlogContentsMemberEffect,
    BlogContentsSearch,

} from 'styles/blogStyle/blogHeaderStyle'

function BlogHeader({ 
    numberOfBlogs,
    blogNum
}) {
    return (
        <BlogContentsHeader>
            <BlogContentsMember>{ `${numberOfBlogs}( ` }</BlogContentsMember>
            <BlogContentsMemberEffect>{ blogNum }</BlogContentsMemberEffect>
            <BlogContentsMember> )</BlogContentsMember>
        </BlogContentsHeader>
    ) ;
}

export default BlogHeader;