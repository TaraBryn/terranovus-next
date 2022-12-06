import { StaticImageData } from 'next/image'
import jpg1 from '../media/jpg-1.jpg'
import jpg2 from '../media/jpg-2.jpg'

interface InfoSectionInterface {
    id: string,
    topLine: string,
    headline: string,
    description: string,
    buttonLabel: string,
    to: string,
    route: boolean,
    img: StaticImageData,
    alt: string
    imgOnLeft?: boolean
}

const content: InfoSectionInterface[] = [
    {
        id: 'about',
        topLine: 'Premium Websites',
        headline: 'Sleek Website Solutions',
        description: 'Whether you need a small static website with a memorable name for customers to find when they turn to google, or a dynamic website delivering custom content to your customers, we have you covered. Contact us to have your website built today. ',
        buttonLabel: 'Get Started',
        to: 'calendar',
        route: true,
        img: jpg2,
        alt: 'Image showing a desk with two computer monitors displaying a website alongside a code editor.'
    },
    {
        id: 'discover',
        topLine: 'Portfolio',
        headline: 'Browse our Work',
        description: 'Browse a selection of completed websites created for other clients. See a design or feature that catches your eye? Let us know, we\'ll incorportate it ito your website.',
        buttonLabel: 'View Portfolio',
        to: '/portfolio',
        route: true,
        img: jpg1,
        alt: 'Image of a laptop on a wooden surface next to a bundle of white flowers displaying a web page.'
    }
]

export default content;