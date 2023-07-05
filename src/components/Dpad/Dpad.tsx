import { FC } from 'react'
import { Props } from '../Controller'
import './Dpad.css'

const Dpad: FC<Props> = ({data} : Props) => {
    const du = data[0].value
    const dd = data[1].value
    const dl = data[2].value
    const dr = data[3].value
    return (
        <div className="dpads">
            <span className="dpad up" style={{opacity: du}}></span>
            <span className="dpad down" style={{opacity: dd}}></span>
            <span className="dpad left" style={{opacity: dl}}></span>
            <span className="dpad right" style={{opacity: dr}}></span>
        </div>
    )
}

export default Dpad