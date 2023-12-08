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
import { getPath, LazyImage } from 'util/commHook'

function BlogContents({ 
    language, 
    blogs 
}) {

    const { _, __, query } = getPath() ;

    return (
        <BlogContentsMain>
            { !query.type ? (
                blogs
                    .sort((a, b) => new Date(b.writingDate) - new Date(a.writingDate))
                    .map((value, index) => {
                    return (
                        <BlogContentsItemLink
                            key = { index }
                            href = { `/blog/${value._id}` }
                            locale = { language }
                        >
                            <BlogContentsItems
                                key = { index }
                            >
                                <BlogContentsItemsTextArea>
                                    <BlogContentsItemsTitle> { value.title } </BlogContentsItemsTitle>
                                    <BlogContentsItemsDescription> { value.introduction } </BlogContentsItemsDescription>
                                    <BlogContentsItemsDate> { value.writingDate.substr(0, 10).replaceAll('-', '.') } </BlogContentsItemsDate>
                                </BlogContentsItemsTextArea>
                                <LazyImage 
                                    width = "378"
                                    height = "240"
                                    alt = "Blog Image"
                                    src = { value.image }
                                    Component = { BlogContentsItemsImage }
                                />
                            </BlogContentsItems>
                        </BlogContentsItemLink>
                    ) ;
                })) : (
                    blogs
                        .filter(value => value.type === query.type)
                        .sort((a, b) => new Date(b.writingDate) - new Date(a.writingDate))
                        .map((value, index) => {
                        return (
                            <BlogContentsItemLink
                                key = { index }
                                href = { `/blog/${value._id}` }
                                locale = { language }
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
                )
            }
        </BlogContentsMain>
    );
}

export default BlogContents;