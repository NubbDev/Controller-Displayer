import { FC } from 'react'
import { Props } from '../Controller'
import './Select.css'

const Select: FC<Props> = ({data} : Props) => {
    const share = data[0].value
    const start = data[1].value
    return (
        <div className="select">
            <span className="back" style={{opacity: share}}></span>
            <span className="menu" style={{opacity: start}}></span>
        </div>
    )
}

export default Select