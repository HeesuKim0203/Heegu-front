import {
    
    BlogContentsMain,
    BlogContentsItems,
    BlogContentsItemLink,
    BlogContentsItemsTextArea,
    BlogContentsItemsTitle,
    BlogContentsItemsImage,
    BlogContentsItemsDescription,
    BlogContentsItemsDate,

} from 'styles/blogStyle/blogContentsStyle'

function BlogContents({ 
    language, 
    blogs 
}) {
    return (
        <BlogContentsMain>
            {
                blogs.map((value, index) => {
                    return (
                        <BlogContentsItemLink
                            key = { index }
                            href = { `/${language}/blog/${value._id}` }
                        >
                            <BlogContentsItems
                                key = { index }
                            >
                                <BlogContentsItemsTextArea>
                                    <BlogContentsItemsTitle> { value.title } </BlogContentsItemsTitle>
                                    <BlogContentsItemsDescription> { value.introduction } </BlogContentsItemsDescription>
                                    <BlogContentsItemsDate> { value.writingDate.substr(0, 10).replaceAll('-', '.') } </BlogContentsItemsDate>
                                </BlogContentsItemsTextArea>
                                <BlogContentsItemsImage 
                                    url = { value.image }
                                />
                            </BlogContentsItems>
                        </BlogContentsItemLink>
                    ) ;
                })
            }
        </BlogContentsMain>
    );
}

export default BlogContents;