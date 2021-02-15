import React from 'react';
import '../styles/ticketAvatar.scss';

export default function TicketAvatar( {statusStyles={}, active = false, firstLetter = 'N'}){
    return (
        //-------------------avatar for tickets ---------------------------
        <div className="ticketAvatarContainer">
            <div style={active ?{backgroundColor: '#000000', color:'#fff'}: {}}>{firstLetter}</div>
            <span style={statusStyles}></span>
        </div>
    );
};
