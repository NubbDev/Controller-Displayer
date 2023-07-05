import './ABXY.css'
import { Props } from '../Controller'
import { FC } from 'react'

const Abxy: FC<Props> = ({data} : Props) => {
    const a = data[0]
    const b = data[1]
    const x = data[2]
    const y = data[3]

    const styleA = a.value == 1 ? 'pressed' : ''
    const styleB = b.value == 1 ? 'pressed' : ''
    const styleX = x.value == 1 ? 'pressed' : ''
    const styleY = y.value == 1 ? 'pressed' : ''

    return (
        <div className="abxy">
            <span className={"button a " + styleA}></span>
            <span className={"button b " + styleB}></span>
            <span className={"button x " + styleX}></span>
            <span className={"button y " + styleY}></span>
        </div>
    )
}

export default Abxy