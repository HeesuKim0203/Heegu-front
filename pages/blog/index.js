import Loader from 'components/Loader'
import Head from 'next/head'
import BlogContainer from 'routes/blog/BlogContainer'
import { getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'
import { KR } from 'util/data' 

import { BLOG } from 'util/text'
import Seo from 'components/Seo'
import { siteBlogTitle } from 'util/text' 

export function Index({ data, notFound }) {

  const { _, lang } = getPath() ;

  return (
    <>
      <Head>
        <Seo 
            title = { siteBlogTitle }
            url = { `/${lang}${BLOG}` }
            description = "Developer Kim heesu Blog."
        />
      </Head>
      { 
        data ?
          (!notFound && 
            <BlogContainer 
              data = { data }
              language = { lang }
            />
          ) : (
            <Loader />
          )
      }
    </>
  )
}

export const getStaticProps = async (context) => {

  const {
    data : blogs
  } = await getBlogs() ;

  if ( !blogs ) {
    return {
      notFound : true,
    }
  }

  return {
   props : { 
     data : {
       blogs
      },
    }
  }
}

export default Index ;
