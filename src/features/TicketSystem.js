import React, { useEffect } from 'react';
import LeftPanel from '../components/LeftPanel';
import Classify from '../components/Classify';
import TaskMessages from '../components/TaskMessages';
import { TicketReducers } from '../state/reducer';
import { userInfo } from '../data/userInfo';
import { tickets } from '../data/tickets';
import { options } from '../data/options'; 
import '../styles/ticketSystemStyle.scss';


export default function TicketSystem() {
    //state
    const [state, dispatch] = TicketReducers();

    useEffect(() => {
        (() => {
            //get user information from any where - local storage for example
            dispatch({ type: 'getUserInfo', data: userInfo });
            //get tickets information from any where - Data base
            dispatch({ type: 'getTicketsData', data: tickets });
            //get tickets options from any where - Data base
            dispatch({ type: 'getOptionsData', data: options });
        })()
    }, []);
console.log(state)
    return (
        <div className='ticketSystem-container'>
            {/* ----------------------  Left panel  ------------------------------ */}
            <LeftPanel state={{ ...state, dispatch: dispatch }} />
            <div className='ticketSystem-container__body'>
                {/* --------------------  Classify section  -------------------------------------- */}
                <Classify state={{ ...state, dispatch: dispatch }}/>
                {/* --------------------  Task messages section  --------------------------------- */}
                <TaskMessages state={{ ...state, dispatch: dispatch }}/>
            </div>
        </div>
    );
};

