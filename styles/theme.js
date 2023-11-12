import { setObjectArrayKeyToLanguageData } from 'util/data'

// FONT array

const FONT = [
    "\'Noto Sans KR\', sans-serif !important",
    "\'Noto Sans JP\', sans-serif !important"
] ;

const { FONT : theme } = setObjectArrayKeyToLanguageData( { FONT } ) ;

export const size = {
    laptop  : 1400,
    tabletL : 1220,
    tabletS : 1024,
    mobileL : 768,
    mobileS : 468  
}

for( const key in size ) {
    theme[key] = `(max-width : ${size[key]}px)` ;
}


export default theme ;