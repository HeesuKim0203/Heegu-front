import { setObjectArrayKeyToLanguageData } from 'util/data'

// FONT array

const FONT = [
    "\'Noto Sans KR\', sans-serif !important",
    "\'Noto Sans JP\', sans-serif !important"
] ;

const { FONT : theme } = setObjectArrayKeyToLanguageData( { FONT } ) ;

export default theme ;