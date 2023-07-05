import { FC } from 'react'
import { Props } from '../Controller'
import './Joysticks.css'

const Joysticks: FC<Props> = ({data} : Props) => {
    const num = 22
    
    const lb = data[4].value
    const rb = data[5].value

    const styleL = lb == 1 ? 'pressed' : ''
    const styleR = rb == 1 ? 'pressed' : ''

    const ly = data[0].value * num
    const lx = data[1].value * num
    const ry = data[2].value * num
    const rx = data[3].value * num


    return (
        <div className="sticks">
            <span className={"stick left" + styleL}
                style={{
                    transform: `rotateX(${-ly}deg) rotateY(${lx}deg)`,
                    marginLeft: `${lx}px`,
                    marginTop: `${ly}px`,
                }}
            ></span>

            <span className={"stick right" + styleR}
                style={{
                    transform: `rotateX(${-ry}deg) rotateY(${rx}deg)`,
                    marginLeft: `${rx}px`,
                    marginTop: `${ry}px`,
                }}
            ></span>
        </div>
    )
}

export default Joysticks