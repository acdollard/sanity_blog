

export default {
    title: 'Post body',
    name: 'bodyText',
    type: 'array',
    of: [
        {
            type: 'block',
            title: 'Block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' }
            ],
            lists: [
                { title: 'Bullet list', value: 'bullet' },
                { title: 'Numbered list', value: 'number' }
            ],
            marks: {
                decorators: [
                    {
                        title: 'Strong',
                        value: 'strong'
                    },
                    {
                        title: 'Emphasis',
                        value: 'em'
                    },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            }
                        ],
                    },
                ],
            },
        },
        {
            type: 'customImage',
        },
        {
            type: 'customCode'
        }
    ]
}