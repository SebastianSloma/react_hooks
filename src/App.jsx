import EffectTest from './useEffect/EffectTest'
import LayoutEffectTest from './useLayoutEffect/LayoutEffectTest'
import ReducerTest from './useReducer/reducerTest'
import RefTest from './useRef/RefTest'
import RefTwo from './useRef/RefTwo'
import StateTest from './useState/StateTest'


function App() {


  return (
<div>
<StateTest/>
<ReducerTest/>
<EffectTest/>
<RefTest/>
<RefTwo/>
<LayoutEffectTest/>
</div>
  )
}

export default App
