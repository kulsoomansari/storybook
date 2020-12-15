import React from 'react'
import Todos from '../components/Todos'
export default {
    title: 'list',
    component: Todos
}
export const list = () => <Todos todolist={[ ]}/>
export const DefaultList = () => <Todos todolist={[{title:'buy milk', id: 1},{title:'prepare tea', id: 2}]}/>
export const FullList = () => <Todos todolist={[{title:'buy milk', id: 1},{title:'prepare tea', id: 2}, {title:'prepare tea', id: 2}]}/>