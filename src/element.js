class Element {
    constructor(tagName, props = {}, children = []) {
        this.tagName = tagName
        this.props = props
        this.children = Array.isArray(children) ? children : [children]
    }

    render() {
        if (typeof this.tagName === 'string') {
            const element = document.createElement(this.tagName)
            Object.keys(this.props).forEach(key => element.setAttribute(key, this.props[key]))
            this.children.forEach(child => element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child.render()))

            return element
        } else {
            throw 'only support tagName of string'
        }
    }
}

export const el = (type, props = {}, children = []) => {
    return new Element(type, props, children)
}