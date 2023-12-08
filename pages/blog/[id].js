import Loader from 'components/Loader'
import BlogWriting from 'routes/writing/BlogWriting'
import { getBlogsId, getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'

export function Index({ data, notFound }) {

  const { _, lang } = getPath() ;
  const { load } = fontLoad('Noto Sans KR', 'Noto Sans JP') ;

  return (
    <>
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