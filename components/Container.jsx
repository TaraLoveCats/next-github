import { cloneElement } from 'react'

const style = {
    width: '100%',
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
}

// export default ({ children, comp: Comp = "div" }) => {
//     return <Comp style={style}>{children}</Comp>
// }

export default ({ children, renderer=<div /> }) => {
    //在使用时改变renderer节点类型，以及对props进行扩展
    const newElement = cloneElement(renderer, {
        style: {...style, ...renderer.props.style},
        children
    })

    return newElement
}