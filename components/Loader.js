import Image from 'next/image'
import load from 'public/load.svg'

import { Wrap } from 'styles/loaderStyle'

function Loader({ small }) {
    return (
        <Wrap
            small = { small }
        >
            <Image 
                src = { load }
                alt = "Load image"
                priority = { true }
            />
        </Wrap>
    );
}

export default Loader;