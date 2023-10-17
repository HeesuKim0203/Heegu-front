import Loader from 'components/Loader'
import BlogContainer from 'routes/blog/BlogContainer'
import { getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'

export function Index({ data, notFound }) {

  const { load } = fontLoad('Noto Sans KR', 'Noto Sans JP') ;
  const { _, lang } = getPath() ;

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
