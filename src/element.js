class Element {
    constructor(type, props = {}, children = []) {
        this.type = type
        this.props = props
        this.children = Array.isArray(children) ? children : [children]
    }

    render() {
        if (typeof this.type === 'string') {
            const element = document.createElement(this.type)
            Object.keys(this.props).forEach(key => element.setAttribute(key, this.props[key]))
            this.children.forEach(child => element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child.render()))

            return element
        } else {
            throw 'only support type of string'
        }
    }
}

export const el = (type, props = {}, children = []) => {
    return new Element(type, props, children)
}