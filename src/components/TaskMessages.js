import React from 'react';
import { BsClock, BsInbox } from "react-icons/bs";
import '../styles/taskMessageStyles.scss'

export default function TaskMessages({ state = {} }) {
    return (
        <div className='task-message-container'>
            <div className="task-message__body">
                <div className="task-message--header">
                    <div className="task-message--title">{state.taskName ? state.taskName : 'New Task'}</div>
                    <div className="task-message--icons">
                        <p>00:00</p>
                        <div onClick={() => state.selectTicket.status && state.dispatch({ type: 'snoozeTicket' })}
                            style={!state.selectTicket.status ? { cursor: 'not-allowed' } : {}}><BsClock /></div>
                        <div onClick={() => state.selectTicket.status && state.dispatch({ type: 'closeTicket' })}
                            style={!state.selectTicket.status ? { cursor: 'not-allowed' } : {}}><BsInbox /></div>
                    </div>
                </div>
                <div className="task-message--messages">
                    {state.selectTicket.messages && state.selectTicket.messages.map((message, index) => (
                        <>
                        <div key={index}>{message.message}</div>
                        <p><span></span>{message.userName}&nbsp;{message.time}</p>
                        </>
                    ))}
                </div>
            </div>
            <div className="task-message__input">
                <input type="text" placeholder="Type a message" value={state.messageText} onChange={(e)=>state.dispatch({type: 'handleChangeMessageText', value: e.target.value})}
                onKeyDown={(e) => {e.keyCode === 13 && state.dispatch({type:'sendTicketMessage'})}}
                disabled={!state.selectTicket.status}
                style={state.selectTicket.status ? {height: 120} : {height: 20}}/>
            </div>
        </div>
    );
};
