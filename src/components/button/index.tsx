import { FC } from 'react'
import './index.css'
type Obj = {
    a: number,
}
type GenObj<T> = {
    a: T
}

const o: Obj = {
    a: 12
}
const o2: GenObj<Obj> = {
    a: {
        a: 1
    }
        
    
}
export const Button: FC<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
        >
    > = (props) => {
    return <button>
        {props.children}
    </button>
}