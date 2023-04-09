import Loader from 'components/Loader'
import BlogWriting from 'routes/writing/BlogWriting'
import { getBlogsId, getBlogs } from 'util/api'
import { JP } from 'util/data'
import { fontLoad } from 'util/commHook'

export function Index({ data, notFound }) {

  const { load } = fontLoad('Noto Sans JP') ;

  return (
    <>
      { 
        load ?
          (!notFound && 
            <BlogWriting 
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


export const getStaticPaths = async () => {

    const {
        data : blogs
    } = await getBlogs() ;

    const paths = blogs.map((value) => ({
      params: { id: value._id },
    })) ;

    return { paths, fallback: false }
  }
  
// 빌드될 때 실행 
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
