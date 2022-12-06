import { StaticImageData } from 'next/image';
import png1 from '../media/png1a.png';
import png2 from '../media/png1b.png';
import png3 from '../media/png1c.png';

interface contentInterface {
    img: StaticImageData,
    heading: string,
    description: string
}

const content: contentInterface[] = [
    {
        img: png1,
        heading: 'Small Static Site',
        description: 'Looking for a small site with static content, such as a portfolio? This option is a cost-effective way to get it up and running'
    },
    {
        img: png2,
        heading: 'Mid-Range Static Site',
        description: 'Need a static site that\' a bit more complex than just a few pages? This option is probably right for you.'
    },
    {
        img: png3,
        heading: 'Large or Dynamic Site',
        description: 'Need a dynamic site, which presents users with custom data, or requires specific plugins or APIs? This is the option you\'ll need.'
    }
]

export default content;