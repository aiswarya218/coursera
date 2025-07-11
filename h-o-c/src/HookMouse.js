// import React, {useState, useEffect} from 'react'

// function HookMouse() {

//     const [x, setX] = useState(0)
//     const [y, setY] = useState(0)

//     const logMousePosition = e => {
//         console.log('Mouse event')
//         setX(e.clientX)
//         setY(e.clientY)
//     }

//     useEffect(() => {
//         console.log('useEffect called')
//         window.addEventListener('mousemove', logMousePosition)
//     })

//     return (
//         <div>
//             Hooks X - {x} Y - {y}
//         </div>
//     );
// }

// export default HookMouse



import React from 'react'
import './App.css'
import ClassMouse from './components/ClassMouse'

function App() {
    return (
        <div className = 'App'>
            <ClassMouse />
        </div>
    )
}

export default App

// import React from 'react'
// import './App.css'
// import ClassMouse from './components/ClassMouse'
// function App() {
//     return (
//         <div className = 'App'>
//             <ClassMouse />
//         </div>
//     )
// }
// export default App