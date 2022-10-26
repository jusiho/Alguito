import {useDispatch, useSelector} from 'react-redux'
import { actionCreators, State } from '../redux';
import { bindActionCreators } from 'redux'

export default function contador() {
    const dispatch = useDispatch()
    
    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch) 
    const amount = useSelector((state: State) => state.bank)

    return (<div className='h-15'>
        <h1>contador</h1>
        <button onClick={() => depositMoney(1000)} className="w-full mt-10 bg-[#EC5252] py-1.5 text-white">+5</button>
        <button onClick={() => withdrawMoney(5000)} className="w-full mt-10 bg-[#EC5252] py-1.5 text-white">+1</button>
        <button onClick={() => bankrupt()} className="w-full mt-10 bg-[#EC5252]  py-1.5 text-white">0</button>
        <button onClick={() => depositMoney(1000)} className="w-full mt-10 bg-[#EC5252]  py-1.5 text-white">-1</button>
        <button onClick={() => withdrawMoney(5000)} className="w-full mt-10 bg-[#EC5252]  py-1.5 text-white">-5</button>
        <h3 className='w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white'>{amount}</h3>
        </div>
    )
  }
