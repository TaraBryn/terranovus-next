interface itemInterface {
    id: string,
    to?: string,
    content: string
    content2?: string
}

interface groupInterface {
    id: string,
    header: string,
    items: itemInterface[]
}

type columnType = groupInterface[];

type contentType = columnType[];

const content: contentType = [
    [
        {
            id: 'about-us',
            header: 'About Us',
            items: [
                {
                    id: 'values',
                    to: '/values',
                    content: 'Our Values'
                },
                {
                    id: 'careers',
                    to: '/careers',
                    content: 'Careers'
                }
            ]
        }
    ],
    [
        {
            id: 'contact-us',
            header: 'Contact Us',
            items: [
                {
                    id: 'phone',
                    content: 'call or text',
                    content2: '(267) 583-8063'
                },
                {
                    id: 'email',
                    content: 'email:',
                    content2: 'tara@terranovus.io'
                }
            ]
        }
    ]
]

export default content;