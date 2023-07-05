import { FC } from 'react'
import { Props } from '../Controller'
import './Triggers.css'

const Triggers: FC<Props> = ({data} : Props) => {
    return (
        <div className="triggers">
            <span className="trigger left" style={{opacity: '0'}}></span>
            <span className="trigger right" style={{opacity: '0'}}></span>
        </div>
    )
}

export default Triggers