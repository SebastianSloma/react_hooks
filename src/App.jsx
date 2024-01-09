import EffectTest from './useEffect/EffectTest'
import ReducerTest from './useReducer/reducerTest'
import RefTest from './useRef/RefTest'
import StateTest from './useState/StateTest'


function App() {


  return (
<div>
<StateTest/>
<ReducerTest/>
<EffectTest/>
<RefTest/>
</div>
  )
}

export default App
