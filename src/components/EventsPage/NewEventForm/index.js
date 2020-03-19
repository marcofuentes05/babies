import React, {useState} from 'react'
import * as actions from './../../../actions/index.js'
import {connect} from 'react-redux'
import './styles.css'


const NewEvent = ({selected, onClick}) => {
    const [notas, cambiarNotas] = useState('');
    const [tipo, cambiarTipo] = useState ('')
    return (
        <div className ="newEventForm">
            <h1> {'Nuevo'} Evento </h1>
            <div className = "tipo">
                <h2>
                    {'Tipo: '}
                    <select id = 'tipos'
                    onChange = {z => cambiarTipo(document.getElementById('tipos').value)}>
                        <option value= "Siesta" >{'Siesta'}</option>
                        <option value="Pacha" >{'Pacha'}</option>
                        <option value="Pecho" >{'Pecho'}</option>
                        <option value="Popo" >{'Popo'}</option>
                        <option value="Pipi" >{'Pipi'}</option>
                    </select>
                </h2>
            </div>
            <div>
                <h2>
                    {'Notas: '}
                    <input className = "notas"
                    id = 'notas'
                    type = "text"
                    placeholder ="¿Algo fuera de lo normal?"
                    onChange = {z => cambiarNotas(z.target.value)}
                    value = {notas}
                    />
                </h2>
            </div>
            <button className = "newEventButton"
            type = "submit"
            onClick = {() => onClick(selected, tipo, notas, new Date(), cambiarNotas, cambiarTipo)}>
                {'Agregar'}
            </button>
        </div>
    )
}

export default connect(
    state => ({
        selected : state.selectedBaby,
    }),
    dispatch => ({
        onClick(selected, tipo, notas, date, cn, ct){
            if (selected === null){
                alert('¡No tenés bebes todavía!')
            }else{
                ct(document.getElementById('tipos').value)
                dispatch(actions.addEvent(selected, tipo, notas, date))
                cn('')
            }
        }
    })
)(NewEvent)