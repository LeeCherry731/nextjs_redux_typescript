import React, { ReactElement } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../components/layout'
import actions from '../redux/actions';
import { RootState } from '../redux/reducers';
import { stateTypes } from '../redux/reducers/auth.reducer';


interface Props {
    
}

export default function login({}: Props): ReactElement {

    const disptach = useDispatch()
    const {token , user} : stateTypes = useSelector<RootState>(({authReducer}) => authReducer)

    return (
        <>
            <Layout>
              <h1>login</h1>
              <button onClick={() => disptach(actions.login({username: "admin", password: "1234"}))}>Click</button>
              <span>{token ? token : ""}</span>
            </Layout>  
        </>
    )
}
