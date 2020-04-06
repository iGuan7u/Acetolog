class JQueryObject {
    
    nodes: Element[]

    constructor(nodes: Element[]) {
        this.nodes = nodes
    }

    click = (callback: (event: MouseEvent) => void) => {
        for(let index = 0; index < this.nodes.length; index++) {
            this.nodes[index].addEventListener('click', callback)
        }
        return this
    }

    addClass = (... classNames: string[]) => {
        for (const className of classNames) {
            this.nodes.forEach(node => {
                node.classList.add(className)
            })
        }
        return this;
    }

    removeClass = (className: string) => {
        for(let index = 0; index < this.nodes.length; index++) {
            this.nodes[index].classList.remove(className)
        }
        return this
    }

    attr = (attributeName: string, newValue?: string) => {
        if (!newValue) {
            return this.nodes[0].getAttribute(attributeName)
        } else {
            this.nodes[0].setAttribute(attributeName, newValue)
            return newValue
        }
    }
}

interface Window {
    $: (querySelector: string | Element) => JQueryObject;
}

window.$ = function(queryObject: string | Element) {
    if (typeof queryObject === 'string') {
        const nodes: Element[] = []
        document.querySelectorAll(queryObject).forEach((element) => {
            nodes.push(element)
        })
        const object = new JQueryObject(nodes)
        return object
    } else {
        const object = new JQueryObject([queryObject])
        return object
    }
}