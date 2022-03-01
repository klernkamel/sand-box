import { FC } from "react"
import './index.css'
export const Card: FC<{title: string}> = (props) => {
    return <div className="card">
        <h2>
            {props.title}
        </h2>
        <hr/>
        {props.children}
    </div>
}