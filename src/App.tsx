import { useState } from 'react'
import './App.css'
import {listen} from '@tauri-apps/api/event';
import Controller from './components/Controller';

export enum ButtomNames {
  Left_Stick_X = 'lx',
  Left_Stick_Y = 'ly',
  Right_Stick_X = 'rx',
  Right_Stick_Y = 'ry',
  Left_Trigger = 'lt',
  Right_Trigger = 'rt',
  Left_Bumper = 'lb',
  Right_Bumper = 'rb',
  Left_Stick_Button = 'lstick',
  Right_Stick_Button = 'rstick',
  A = 'a',
  B = 'b',
  X = 'x',
  Y = 'y',
  Dpad_Up = 'du',
  Dpad_Down = 'dd',
  Dpad_Left = 'dl',
  Dpad_Right = 'dr',
  Share = 'share',
  Start = 'start',
  Home = 'xbox',
}

export enum ButtomIndex {
  Left_Stick_X = 0,
  Left_Stick_Y = 1,
  Right_Stick_X = 2,
  Right_Stick_Y = 3,
  Right_Trigger = 4,
  Left_Trigger = 5,
  A = 6,
  B = 7,
  X = 8,
  Y = 9,
  Left_Bumper = 10,
  Right_Bumper = 11,
  Share = 12,
  Start = 13,
  Left_Stick_Button = 14,
  Right_Stick_Button = 15,
  Home = 16,
  Dpad_Up = 17,
  Dpad_Down = 18,
  Dpad_Left = 19,
  Dpad_Right = 20,
}

export interface ButtonType {
  name: ButtomNames
  value: number
}

function App() {
  const [data, setData] = useState([] as ButtonType[])
  const [connected, setConnected] = useState(false)
  listen('controller_movement', (event) => {
    const dataJSON = JSON.parse(event.payload as string) as ButtonType[]
    setData(dataJSON)
    if (!connected) {
      setConnected(true)
    }
  })

  return (
    <>
      <div>
        {
          connected ? <Controller data={data}/> : <div>Not Connected</div>
        }
        
        {/* {data.map((button) => (
          <div>{button["name"]} | Value: {button["value"]}</div>
        ))} */}
      </div>
    </>
  )
}

export default App
