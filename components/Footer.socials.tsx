import { ReactElement } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface socialInterface {
    id: String,
    href: string,
    icon: ReactElement
}

const socials: socialInterface[] = [
    {
        id: 'facebook',
        href: 'https://www.facebook.com/terranovus2022',
        icon: <FaFacebook />
    },
    {
        id: 'twitter',
        href: 'https://twitter.com/terranovus2022',
        icon: <FaTwitter />
    },
    {
        id: 'linkedin',
        href: 'https://www.linkedin.com/company/terranovus',
        icon: <FaLinkedin />
    },
    {
        id: 'github-1',
        href: 'https://github.com/TerraNovus',
        icon: <FaGithub />
    },
    {
        id: 'github-2',
        href: 'https://github.com/TaraBryn',
        icon: <FaGithub />
    }
]

export default socials;