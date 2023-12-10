import Loader from 'components/Loader'
import Head from 'next/head'
import BlogWriting from 'routes/writing/BlogWriting'
import { getBlogsId, getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'
import { KR, setDataLanguage } from 'util/data' 

import { BLOG } from 'util/text'
import Seo from 'components/Seo'

export function Index({ data, notFound }) {

  const { _, lang } = getPath() ;
  const { load } = fontLoad(lang === KR ? 'Noto Sans KR' : 'Noto Sans JP') ;

  return (
    <>
      <Head>
        <Seo 
          title = { data.blogs[0].title }
          url = { `/${lang}${BLOG}/${data.blogs[0]._id}` }
          description = { setDataLanguage(data.blogs, lang)[0].introduction }
          type = "Blog Posting"
          image = { process.env.NEXT_PUBLIC_IMAGE_URL + data.blogs[0].image }
        />
      </Head>
      { 
        load ?
          (!notFound && 
            <BlogWriting 
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


export const getStaticPaths = async ({ locales }) => {

    const {
        data : blogs
    } = await getBlogs() ;

    const pathsArray = blogs.map(value => {
      return locales.map(locale => {
        return ({
          params: { id: value._id },
          locale
        })
      })
    }) ;

    const paths = pathsArray.reduce((prev, value) => {
      
      return [
        ...prev,
        ...value
      ]
    }, []) ;

    return { paths, fallback: false }
  }
  

export const getStaticProps = async ({ params }) => {
    const {
        data : blogs
    } = await getBlogsId(params.id) ;

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