import { StaticImageData } from 'next/image';
import site000 from '../media/site000.png';
import site001 from '../media/site001.png';
import site002 from '../media/site002.png';

interface contentInterface {
    id: string,
    img: StaticImageData,
    link: string,
    text: string
}

const content: contentInterface[] = [
    {
        id: 'site001',
        img: site001,
        link: 'https://radikalhealing.com/',
        text: 'Radikal Healing'
    },
    {
        id: 'site002',
        img: site002,
        link: 'https://radikal.life/?affiliate=ghsx4i',
        text: 'Radikal Life'
    },
    {
        id: 'site003',
        img: site002,
        link: 'https://radikalyoga.se/',
        text: 'Radikal Yoga'
    },
    {
        id: 'site000',
        img: site000,
        link: 'https://tarabryn.com/',
        text: 'tarabryn.com (personal portfolio)'
    }
]

export default content;