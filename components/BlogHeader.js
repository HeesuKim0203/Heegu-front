import {

    BlogContentsHeader,
    BlogContentsMember,
    BlogContentsMemberEffect,
    BlogContentsSearch,

} from 'styles/blogStyle/blogHeaderStyle'

function BlogHeader({ 
    numberOfBlogs,
    blogNum,
    blogid
}) {
    return (
        <BlogContentsHeader>
            <BlogContentsMember>{ `${numberOfBlogs}( ` }</BlogContentsMember>
            <BlogContentsMemberEffect>{ blogid ? `${blogNum} | ${blogid}` : blogNum }</BlogContentsMemberEffect>
            <BlogContentsMember> )</BlogContentsMember>
        </BlogContentsHeader>
    ) ;
}

export default BlogHeader;