import TitleComponent from 'components/TitleComponent'

import { 

    Wrap,
    Container,
    ItemArea,
    Item,
    ItemImage,
    ItemTextArea,
    ItemTitle,
    ItemDescription,
    ItemDate,
    MoreButtonArea,
    MoreButton,
    SlidePrev,
    SlideNext,

    ItemLink

} from 'styles/homeStyle/writingStyle'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import { useEffect, useState } from 'react'
import { size } from 'styles/theme'

function WritingContents({ 
    writing,
    writingTitle,
    blogText,
    language
}) {

    const [ screenSize, setScreenSize ] = useState(window.innerWidth) ;
    const [ spaceBetween, setSpaceBetween ] = useState(30) ;
    const [ slidesPreView, setSlidesPreView ] = useState(3) ;
    const [ delay, setDelay ] = useState(7000) ;

    useEffect(() => {
       window.addEventListener('resize', () => {
        setScreenSize(window.innerWidth) ;
       }) ;
    }, []) ;

    useEffect(() => {
        if( screenSize <= size.mobileL ) {
            setSlidesPreView(1) ;
            setSpaceBetween(0) ;
            setDelay(2000) ;
        }else {
            setSlidesPreView(3) ;
            setSpaceBetween(30) ;
            setDelay(7000) ;
        }
    }, [ screenSize ]) ;

    return (
        <Wrap>
            <Container>
                <TitleComponent title = { writingTitle }/>
                <ItemArea>
                    <SlidePrev />
                    <Swiper
                        spaceBetween = { spaceBetween }
                        slidesPerView = { slidesPreView }
                        autoplay = { { delay : delay, disableOnInteraction : false } }
                        modules = { [ Autoplay, Navigation ] }
                        navigation = { { 
                            prevEl: "#slide_prev",
                            nextEl: "#slide_next",
                        } }
                    >
                        { writing
                            .sort((a, b) => new Date(b.writingDate) - new Date(a.writingDate))
                            .map((value, index) => (
                                <SwiperSlide key = { index } >
                                    <ItemLink
                                        key = { index }
                                        href = { `/blog/${value._id}` }
                                        locale = { language }
                                    >
                                        <Item key = { index } >
                                            <ItemImage  
                                                url = { value.image }
                                            />
                                            <ItemTextArea>
                                                <ItemTitle>{ value.title }</ItemTitle>
                                                <ItemDescription>{ value.introduction }</ItemDescription>
                                                <ItemDate>{ value.writingDate.substr(0, 10).replaceAll('-', '.') }</ItemDate>
                                            </ItemTextArea>
                                        </Item>
                                    </ItemLink>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <SlideNext />
                    <MoreButtonArea>
                        <MoreButton
                            href = { `/${ blogText.substring(0, 1).toLowerCase() + blogText.substring(1) }` }
                            locale = { language }
                        >
                            More
                        </MoreButton>
                    </MoreButtonArea>
                </ItemArea>
            </Container>
        </Wrap>
    );
}

export default WritingContents;