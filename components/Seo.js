import { webData } from 'util/text'

const Seo = ({ title, url, description, type, image }) => {

    const { webUrl, titleData, name } = webData ;

    const jsonLd = [
        {
            '@context' : 'https://schema.org',
            '@type' : 'WebSite',
            'url' : webUrl,
            'name' : `${titleData} ${name}`,
            'alternateName' : name,
            'logo' : '/logo192.png'
        }
    ] ;

    if(type) {
        jsonLd.push(
            {
                '@context' : 'https://schema.org',
                '@type' : 'BreadcrumbList',
                itemListElement : [
                    {
                        '@type' : 'ListItem',
                        'position' : 1,
                        'item' : {
                            '@id' : `${webUrl}${DOCUMENT}`,
                            'name' : 'blog',
                            'image' : '/logo512.png'
                        },
                    },
                    {
                        '@type' : 'ListItem',
                        'position' : 2,
                        'item' : {
                            '@id' : `${webUrl}${url}`,
                            'name' : `${type} : ${title}`,
                            image,
                        }
                    }
                ]
            },
            {
                '@context' : 'http://schema.org',
                '@type' : 'BlogPosting',
                'url' : `${webUrl}${url}`,
                'name' : `${type} : ${title} | ${name}`,
                'alternateName' : name,
                'headline' : title,
                'description' : description,
                'image' : {
                    '@type' : 'ImageObject',
                    'url' : image
                }
            }
        )
    } ;

    return (
        <>
            {/* <title>{title}</title> */}
            <meta property="og:title" content={title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`${webUrl}${url}`}/>
            <meta property="og:image" content="/logo192.png"/>
            <meta property="og:description" content={description} />
            <meta name="url" content={`${webUrl}${url}`} />
            <meta name="description" content={description} />
            <meta name="image" content="/logo192.png" />
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </>
    );
};

export default Seo;