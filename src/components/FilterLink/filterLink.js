import React from 'react'
import { NavLink } from 'react-router-dom'

const FilterLink = ({filter, children}) => (
    <NavLink
        exact
        to={filter === 'MAIN' ? '/' : `/${filter}`}
        activeStyle={{
            textDecoration: 'none',
            color: 'green',
            fontSize: '30px',
            
        }}
    >
        {children}
    </NavLink>
)

export default FilterLink