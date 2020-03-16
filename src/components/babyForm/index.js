import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../actions/index.js'
import './styles.css'

//DUMB COMPONENT
const Babies = ({ onSubmit }) => {
    const [name, changeName] = useState('');
    const [lastName, changeLast] = useState('');
    return(
        <div className = "main">
            <input className = "textInput"
                type = "text"
                placeholder = "Nombre"
                value = {name}
                onChange = {z => changeName(z.target.value)}
                />
            <input className="textInput"
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={z => changeLast(z.target.value)}
                />
            <button className = "inputButon"
                type = "submit"
                onClick = {() => onSubmit(name, lastName, changeName, changeLast)}
                >
                {'Agregar'}
            </button>
        </div>
    )
}


// SMART COMPONENT
export default connect (
    undefined,
    dispatch => ({
        onSubmit(name, lastName, cname, clast){
            if (name !== '' && lastName !== ''){
                dispatch(actions.addBaby(name,lastName))
                cname('')
                clast('')
            }
        }
    })
)(Babies)