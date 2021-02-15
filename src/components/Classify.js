import React from 'react';
import Select from '../micro-component/Select';
import '../styles/classifyStyle.scss';

export default function Classify({ state = {} }) {
    return (
        <div className='classify-container'>
            <div>
                <h1>Classify</h1>
                <p>What the user asking for?</p>
                <Select options={state.selectOptions}
                    value={state.selectValue}
                    handleChange={(e) => state.dispatch({ type: 'handleChangeSelect', value: e.target.value })}
                />
                <p>Task name list shows to the user</p>
                <input placeholder='Task Name' type='text'
                    value={state.taskName}
                    onChange={(e) => state.dispatch({ type: 'handleChangeTaskName', value: e.target.value })} />
                <p className='characters-number' style={state.charactersNumber < 0 ? { color: '#f17f7f' } : {}}>(Characters Left: {state.charactersNumber})</p>
            </div>
            <div>
                <button disabled={state.charactersNumber <= 0 || state.selectValue === '' || state.taskName === ''} 
                className={state.charactersNumber <= 0 || state.selectValue === '' || state.taskName === '' ? 'button-disabled' : 'button-active'}
                onClick={() => {
                    state.selectTicket.status ?
                    state.dispatch({type: 'updateTask'}):
                    state.dispatch({type: 'createNewTask'})}}>{state.selectTicket.status ? 'Update' : 'Process'}</button>
            </div>
        </div>
    );
};
