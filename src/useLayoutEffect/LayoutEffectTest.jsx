import {useLayoutEffect, useEffect, useRef} from 'react'

const LayoutEffectTest = () => {
    const inputRef = useRef(null)

    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    },[])

    useEffect(()=>{
        inputRef.current.value = 'Hello World!'
    },[])

  return (
    <div>
        <p><b>useLayoutEffect</b></p>
        <input ref={inputRef} value='Hook' style={{width: 400, height:60}} />
    </div>
  )
}

export default LayoutEffectTest