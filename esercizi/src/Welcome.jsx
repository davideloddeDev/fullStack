// welcome.jsx

import { HelloWorld } from './HelloWorld'

// eslint-disable-next-line react/prop-types
export function Welcome({ name, age }) {
    return (
        <div>
            {name ? <h2>Benvenuto {name}!</h2> : <HelloWorld/>}
            {age && <h2>Tu Hai {age} anni.</h2>}
        </div>
    ) 
}  
