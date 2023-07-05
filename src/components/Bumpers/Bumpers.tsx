import { FC } from 'react'
import { Props } from '../Controller'
import './Bumpers.css'
const Bumpers: FC<Props> = ({data} : Props) => {
    const lb = data[0].value
    const rb = data[1].value
    return (
        <div className="bumpers">
            <span className="bumper left" style={{opacity: lb}}></span>
            <span className="bumper right" style={{opacity: rb}}></span>
        </div>
    )
}

export default Bumpers