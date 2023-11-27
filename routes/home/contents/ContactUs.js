import emailjs from '@emailjs/browser'
import TitleComponent from 'components/TitleComponent'
import { useRef } from 'react'
import { 

    Wrap,
    Contaienr,
    FormArea,
    Form,
    Fieldset,
    InputTitle,
    InputEmail,
    InputText,
    Button,

    Ballon

} from 'styles/homeStyle/contactUsStyle'

function ContactUsContents({
    contactUsTitle,
    contactUsInputPlaceHolder,
    contactUsInputPlaceHolderEmail,
    contactUsTextAreaPlaceHolder,
    ballon,
    language
}) {

    const form = useRef() ;
    
    const sendEamil = (e) => {
        e.preventDefault() ;

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAIL_ID, 
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, 
            form.current, 
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
        )
            .then((result) => {
                alert("Send Mail Sucessfully") ;
            }, (error) => {
                alert("Send Mail failure") ;
                console.log(error) ;
            });
    }

    return (
        <Wrap>
            <Contaienr>
                <TitleComponent title = { contactUsTitle } />
                <FormArea>
                    <Form ref = { form } onSubmit = { sendEamil }>
                        <Fieldset>
                            <InputTitle 
                                type = "text"
                                name = "user_name"
                                placeholder = { contactUsInputPlaceHolder } 
                                language = { language }
                            />
                            <InputEmail 
                                type = "email"
                                name = "user_email"
                                placeholder = { contactUsInputPlaceHolderEmail } 
                                language = { language }
                            />
                            <InputText
                                name = "message"
                                placeholder = { contactUsTextAreaPlaceHolder } 
                                language = { language }    
                            />
                            <Button type = "submit" >
                                {/* <Ballon>{ ballon }</Ballon> */}
                                Submit
                            </Button>
                        </Fieldset>
                    </Form>
                </FormArea>
            </Contaienr>
        </Wrap>
    );
}

export default ContactUsContents ;