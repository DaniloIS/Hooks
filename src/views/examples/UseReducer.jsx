import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, allReducers } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(allReducers, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem Usuário</span>
                 }
                <span className="text">{state.number}</span>  
                <div>
                    <button onClick={() => login(dispatch, 'Danilo')} className="btn">Login</button>
                    <button onClick={() => numberAdd2(dispatch)} className="btn">+2</button>
                    <button onClick={() => dispatch({type: 'numberMult7'})} className="btn">*7</button>
                    <button onClick={() => dispatch({type: 'numberDiv25'})} className="btn">/25</button>
                    <button onClick={() => dispatch({type: 'numberParseInt'})} className="btn">ParseInt</button>
                    <button onClick={() => dispatch({type: 'numberAddN', payload: -10})} className="btn">-10</button>
                    <button onClick={() => dispatch({type: 'numberAddN', payload: +10})} className="btn">+10</button>
                </div> 
            </div>
        </div>
    )
}

export default UseReducer
