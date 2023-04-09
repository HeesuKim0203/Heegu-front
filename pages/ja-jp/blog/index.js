import Loader from 'components/Loader'
import BlogContainer from 'routes/blog/BlogContainer'
import { getBlogs } from 'util/api'
import { JP } from 'util/data'
import { fontLoad } from 'util/commHook'

export function Index({ data, notFound }) {

  const { load } = fontLoad('Noto Sans JP') ;

  return (
    <>
      { 
        load ?
          (!notFound && 
            <BlogContainer 
              data = { data }
              language = { JP }
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
