import React from 'react';
import Avatar from '../micro-component/Avatar';
import TicketAvatar from '../micro-component/TicketAvatar';
import '../styles/leftPanel.scss';

export default function LeftPanel({ state = {} }) {
    return (
        <div className="LeftPanelContainer">
            <div className="userAvatarContainer" onClick={()=>state.dispatch({type: 'openNewTask'})}>
                <Avatar imageUrl={state.userInfo.avatarUrl} alt={state.userInfo.userName} />
            </div>

            <div className="userTicketContainer">
                {state.userTickets.map(item => {
                    return (item.status === 'New' || item.status === 'Saved') &&
                        <div onClick={() => state.dispatch({ type: 'selectTicket', data: item })} key={item._id}>
                            <TicketAvatar statusStyles={item.messages.length ? { backgroundColor: '#f17f7f' } : { display: 'none' }}
                             active={item._id === state.selectTicketId}
                             firstLetter={item.title.charAt(0).toUpperCase()}/>
                        </div>
                })}
            </div>

            <div className="snoozeTicketContainer">
                {state.userTickets.map(item => {
                    return item.status === 'Snoozed' &&
                        <div onClick={() => state.dispatch({type:'selectTicket', data: item})} key={item._id}>
                            <TicketAvatar statusStyles={{ backgroundColor: '#ffbe6b'}} active={item._id === state.selectTicketId}
                            firstLetter={item.title.charAt(0).toUpperCase()}/>
                        </div>
                })}
            </div>
        </div>
    );
};

