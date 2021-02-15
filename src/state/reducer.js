import {
    useReducer
} from 'react';

import { ticketActions } from './actions';
/**
 * Countries Reducer
 * @returns {[{
 * }},
 * React.DispatchWithoutAction
 * ]}
 */
export const TicketReducers = () => {
    const [state, dispatch] = useReducer(ticketActions, {
        userInfo: {},
        userTickets: [],
        selectTicket: {},
        selectTicketId: '',
        selectOptions: [''],
        messageText: '',
        selectValue: '',
        charactersNumber: 25,
        taskName: ''

    });

    return [state, dispatch];
}