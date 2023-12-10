import Loader from 'components/Loader'
import BlogContainer from 'routes/blog/BlogContainer'
import { getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'
import { KR } from 'util/data' 

export function Index({ data, notFound }) {

  const { _, lang } = getPath() ;
  const { load } = fontLoad(lang === KR ? 'Noto Sans KR' : 'Noto Sans JP') ;

  return (
    <>
      { 
        load ?
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
