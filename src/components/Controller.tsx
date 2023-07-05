import { FC } from 'react'
import { ButtomIndex, ButtonType } from '../App'
import Bumpers from './Bumpers/Bumpers'
import './Controller.css'
import Dpad from './Dpad/Dpad'
import Joysticks from './Joysticks/Joysticks'
import Select from './Select/Select'
import ABXY from './Abxy/Abxy'
import Triggers from './triggers/Triggers'

export interface Props {
    data: ButtonType[]
}

const Controller: FC<Props> = ({data} : Props) => {
    const ABXY_buttons = [data[ButtomIndex.A], data[ButtomIndex.B], data[ButtomIndex.X], data[ButtomIndex.Y]]
    const Triggers_buttons = [data[ButtomIndex.Left_Trigger], data[ButtomIndex.Right_Trigger]]
    const Bumpers_buttons = [data[ButtomIndex.Left_Bumper], data[ButtomIndex.Right_Bumper]]
    const Joysticks_buttons = [
        data[ButtomIndex.Left_Stick_Y], data[ButtomIndex.Left_Stick_X],
        data[ButtomIndex.Right_Stick_Y], data[ButtomIndex.Right_Stick_X],
        data[ButtomIndex.Left_Stick_Button], data[ButtomIndex.Right_Stick_Button]
    ]
    const Dpad_buttons = [data[ButtomIndex.Dpad_Up], data[ButtomIndex.Dpad_Down], data[ButtomIndex.Dpad_Left], data[ButtomIndex.Dpad_Right]]
    const Select_buttons = [data[ButtomIndex.Share], data[ButtomIndex.Start], data[ButtomIndex.Home]]
    return (
        <div className="controller xbox">
            <ABXY data={ABXY_buttons}/>
            <Triggers data={Triggers_buttons}/>
            <Bumpers data={Bumpers_buttons}/>
            <Joysticks data={Joysticks_buttons}/>
            <Dpad data={Dpad_buttons}/>
            <Select data={Select_buttons}/>
        </div>
    )
}

export default Controller