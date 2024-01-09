import { useRef } from 'react'

const RefTest = () => {
    const inputRef = useRef(null)

    const onClick = () =>{
        inputRef.current.value =''
    }
  return (
    <div>
      <p><b>useRef</b></p>
        <div>
            <h1>Name</h1>
            <input type="text" placeholder='Bla...' ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    </div>
  )
}

export default RefTest