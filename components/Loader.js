import Image from 'next/image'
import load from 'public/load.svg'

import {

    Wrap

} from 'styles/loaderStyle'

function Loader(props) {
    return (
        <Wrap>
            <Image 
                src = { load }
                alt = "Load image"
            />
        </Wrap>
    );
}

export default Loader;