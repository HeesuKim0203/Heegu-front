import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

import { 

  Container,
  WritingContainer,
  FormContainer,
  Form,
  Fieldset,

  InputTitle,
  TypeSelect,
  TypeOption,
  InputImage,
  KRDescriptionInput,
  JPDescriptionInput,
  Button

} from 'styles/writeStyle/writeStyle'

import { createBlog } from 'util/api'
import { BLOGTYPE } from 'util/text'

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

function Write(props) {

    const router = useRouter() ;

    const [ cookies, _ ] = useCookies(['token']) ;
    const [ KRwrite, setWriteKRwrite ] = useState('') ;
    const [ JPwrite, setWriteJPwrite ] = useState('') ;
    const [ title, setTitle ] = useState('') ;
    const [ type, setType ] = useState('') ;
    const [ image, setImage ] = useState('') ;
    const [ krDescription, setKRDescription ] = useState('') ;
    const [ jpDescription, setJPDescription ] = useState('') ;
    const [ blogData, setBlogData ] = useState({}) ;

    if(!cookies.token) router.push(`/profile/login`) ; 

    useEffect(() => {

      setBlogData({
          title,
          type,
          image,
          writingDate : "",
          realtedWrting : [],
          "ja-jp": {
              description : JPwrite,
              introduction : jpDescription
          },
          "ko-kr": {
              description : KRwrite,
              introduction : krDescription
          }
      }) ;

    }, [
      title,
      KRwrite,
      JPwrite,
      type,
      image,
      krDescription,
      jpDescription,
    ]) ;

    function buttonOnSubmit(e) {
      e.preventDefault() ;

      createBlog(JSON.stringify(blogData), cookies.token).then((result) => {
          alert("Create Blogs Sucessfully") ;
      }, (error) => {
          alert("Create Blogs failure") ;
          console.log(error) ;
      });
    }

    return (
      <Container>
        <FormContainer>
          <Form onSubmit = { buttonOnSubmit }>
            <Fieldset>
              <InputTitle 
                placeholder = "Title"
                onChange = { e => setTitle(e.target.value) }
              />
              <TypeSelect
                onChange = { e => setType(e.target.value) }
              >
                {
                  BLOGTYPE.map((blogType) => (
                    <TypeOption 
                      value = { blogType }
                    >
                      { blogType }
                    </TypeOption>
                  ))
                }
              </TypeSelect>
              <InputImage 
                placeholder = "Image"
                onChange = { e => setImage(e.target.value) }
              />
              <KRDescriptionInput 
                placeholder = "KRDescriptionInput"
                onChange = { e => setKRDescription(e.target.value) }
              />
              <JPDescriptionInput 
                placeholder = "JPDescriptionInput"
                onChange = { e => setJPDescription(e.target.value) }
              />
              <Button type="submit" >Submit</Button>
            </Fieldset>
          </Form>
        </FormContainer>
        {
          cookies.token ?
            (<WritingContainer>
              <MDEditor 
                id = "1"
                value = { KRwrite } 
                onChange={ setWriteKRwrite } 
                height = "100vh"
                style = {{
                  marginTop : "10px",
                  marginBottom : "20px",
                }}
              />
              <MDEditor 
                id = "2"
                value = { JPwrite } 
                onChange={ setWriteJPwrite } 
                height = "100vh"
              />
            </WritingContainer>) : (<WritingContainer />)
        }
      </Container>
    );
}

export default Write;