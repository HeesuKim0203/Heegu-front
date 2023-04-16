import Loader from 'components/Loader'
import HomeContainer from 'routes/home/HomeContainer'
import { getProjects, getCareers, getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'

// data : Home data
// notFound : Data existence
function Index({ data, notFound }) {

  const { load } = fontLoad('Noto Sans KR', 'Noto Sans JP') ;
  const { _, lang } = getPath() ;

  return (
    <>
      { 
        load ?
          (!notFound && 
            <HomeContainer 
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
    data : careers
  } = await getCareers() ;

  const {
    data : projects
  } = await getProjects() ;

  const {
    data : writings
  } = await getBlogs() ;

  if (!careers && !projects && !blogs) {
    return {
      notFound : true,
    }
  }

  return {
   props : { 
     data : {
        careers,
        projects,
        writings
      },
    }
  }
}

export default Index ;