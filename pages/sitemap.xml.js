import { getBlogs } from 'util/api'
import { languageData, KR } from 'util/data';

const EXTERNAL_DATA_URL = `https://www.heegublog.com/blog`;

function generateSiteMap(languageData, blogs) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${ languageData.map((languageData) => {
      return languageData.language === KR ? (`
        <url>
          <loc>www.heegublog.com</loc>
        </url>
        <url>
          <loc>www.heegublog.com/blog</loc>
        </url>
        ${blogs
            .map(({ _id }) => {
                return `
                <url>
                    <loc>${`${EXTERNAL_DATA_URL}/${_id}`}</loc>
                </url>
              `;
            }).join('')}`
        ) : (`
        <url>
          <loc>www.heegublog.com/${languageData.language}</loc>
        </url>
        <url>
          <loc>www.heegublog.com/${languageData.language}/blog</loc>
        </url>
        ${blogs
          .map(({ _id }) => {
            return `
              <url>
                  <loc>${`${EXTERNAL_DATA_URL}/${languageData.language}/${_id}`}</loc>
              </url>
            `;
          }).join('')}`)
    }).join('')}}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {

    const {
        data : blogs
    } = await getBlogs() ;

    if ( !blogs ) {
        return {
            notFound : true,
        }
    }
    
    const sitemap = generateSiteMap(languageData, blogs);

    res.setHeader('Content-Type', 'text/xml') ;
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;