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

} from 'styles/homeStyle/writingStyle'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'

function WritingContents({ 
    writing,
    writingTitle,
    blogText,
    language
}) {

    return (
        <Wrap>
            <Container>
                <TitleComponent title = { writingTitle }/>
                <ItemArea>
                    <SlidePrev />
                    <Swiper
                        spaceBetween = { 30 }
                        slidesPerView = { 3 }
                        autoplay = { { delay : 7000, disableOnInteraction : false } }
                        modules = { [ Autoplay, Navigation ] }
                        navigation = { { 
                            prevEl: "#slide_prev",
                            nextEl: "#slide_next",
                        } }
                    >
                        { writing.map((value, index) => (
                                <SwiperSlide key = { index } >
                                    <Item key = { index } >
                                        <ItemImage  
                                            url = { value.image }
                                        />
                                        <ItemTextArea>
                                            <ItemTitle>{ value.title }</ItemTitle>
                                            <ItemDescription>{ value.introduction }</ItemDescription>
                                            <ItemDate>{ value.date }</ItemDate>
                                        </ItemTextArea>
                                    </Item>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <SlideNext />
                    <MoreButtonArea>
                        <MoreButton
                            href = { `/${ language }/${ blogText.substring(0, 1).toLowerCase() + blogText.substring(1) }` }
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