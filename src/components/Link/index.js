import LinkNext from 'next/link'

export default function Link({children, href, ...props}) {
    return (
        <LinkNext href={href}>
            <a {...props}>{children}</a>
        </LinkNext>
    )
}