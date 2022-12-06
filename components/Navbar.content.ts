interface contentInterface {
    to: string,
    content: string,
    excludedPaths?: string[],
    paths?: string[],
    scroll?: boolean
}

const content: contentInterface[] = [
    {
        "to": "top",
        "content": "Home",
        paths: ['/'],
        scroll: true
    },
    {
        "to": "about",
        "content": "About",
        "paths": ["/"],
        scroll: true
    },
    {
        "to": "discover",
        "content": "Discover",
        "paths": ["/"],
        scroll: true
    },
    {
        "to": "services",
        "content": "Services",
        "paths": ["/"],
        scroll: true
    }
]

export default content