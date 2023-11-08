import { EVENTS } from './consts'

function navigate(href) {
    window.history.pushState({}, '', href)

    // Create a personalized event notify the browser that the url is changed
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
    const handleClick = (event) => {

        const isMainEvent = event.button === 0
        const isModifiedEvent = event.metakey || event.altKey || event.ctrlKey || event.shiftKey

        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to) // SPA navegation
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}