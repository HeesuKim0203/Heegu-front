import TitleComponent from 'components/TitleComponent'
import { 

    Wrap,
    Contaienr,
    FormArea,
    Form,
    Fieldset,
    InputTitle,
    InputText,
    Button,

} from 'styles/homeStyle/contactUsStyle'

function ContactUsContents({
    contactUsTitle,
    contactUsInputPlaceHolder,
    contactUsTextAreaPlaceHolder,
    language
}) {
    return (
        <Wrap>
            <Contaienr>
                <TitleComponent title = { contactUsTitle } />
                <FormArea>
                    <Form>
                        <Fieldset>
                            <InputTitle 
                                placeholder = { contactUsInputPlaceHolder } 
                                language = { language }
                            />
                            <InputText 
                                placeholder = { contactUsTextAreaPlaceHolder } 
                                language = { language }    
                            />
                            <Button type = "button" >Submit</Button>
                        </Fieldset>
                    </Form>
                </FormArea>
            </Contaienr>
        </Wrap>
    );
}

export default ContactUsContents ;