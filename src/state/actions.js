export const ticketActions = (prevState, action) => {
    switch (action.type) {

        case 'getUserInfo':// get userInfo from local storage for example
            return {
                ...prevState,
                userInfo: action.data
            }
        case 'getTicketsData': // handle get all ticket data
            return {
                ...prevState,
                userTickets: action.data
            }

        case 'selectTicket': // handle select ticket
            return {
                ...prevState,
                selectTicket: action.data,
                selectTicketId: action.data._id,
                selectValue: action.data.goal,
                taskName: action.data.title,
                messageText: ''
            }
        case 'openNewTask': // handle open new ticket click event
            return {
                ...prevState,
                selectTicket: {},
                selectTicketId: Math.random().toString(36).substring(7),
                selectValue: '',
                taskName: '',
            }
        case 'createNewTask': // handle create new ticket
            return {
                ...prevState,
                selectTicket: {
                    _id: prevState.selectTicketId,
                    title: prevState.taskName,
                    assignee: prevState.userInfo.userName,
                    status: 'Saved',
                    goal: prevState.selectValue,
                    messages: [],
                },
                userTickets: [{
                    _id: prevState.selectTicketId,
                    title: prevState.taskName,
                    assignee: prevState.userInfo.userName,
                    status: 'Saved',
                    goal: prevState.selectValue,
                    messages: [],
                }, ...prevState.userTickets],
            }
        
        case 'updateTask': // handle update ticket info
            return {
                ...prevState,
                userTickets: prevState.userTickets.map(item => {
                    if (item._id === prevState.selectTicketId) {
                        return { ...item, title: prevState.taskName, goal: prevState.selectValue }
                    } else {
                        return item
                    }

                })
            }
        
        case 'getOptionsData': // handle get select options from data
            return {
                ...prevState,
                selectOptions: action.data
            }
        case 'handleChangeSelect':// handle change ticket goals select
            return {
                ...prevState,
                selectValue: action.value
            }

        case 'handleChangeTaskName': // handle change value for ticket name input
            return {
                ...prevState,
                taskName: action.value,
                charactersNumber: 25 - action.value.length
            }
        case 'closeTicket':// handle change ticket status to close
            return {
                ...prevState,
                userTickets: prevState.userTickets.map(item => {
                    if (item._id === prevState.selectTicketId) {
                        item.status = 'Closed'
                    }
                    return item
                })
            }
        case 'snoozeTicket':// handle change ticket status to snoozed
            return {
                ...prevState,
                userTickets: prevState.userTickets.map(item => {
                    if (item._id === prevState.selectTicketId) {
                        item.status = 'Snoozed'
                    }
                    return item
                })
            }
        case 'handleChangeMessageText':// handle change value for message input
            return {
                ...prevState,
                messageText: action.value
            }
        case 'sendTicketMessage':// handle send message by click enter
            const time = new Date();
            return {
                ...prevState,
                selectTicket: { ...prevState.selectTicket, messages: [...prevState.selectTicket.messages, { userName: prevState.userInfo.userName, message: prevState.messageText, time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }] },
                userTickets: prevState.userTickets.map(item => {
                    if (item._id === prevState.selectTicketId) {
                        item = { ...prevState.selectTicket, messages: [...prevState.selectTicket.messages, { userName: prevState.userInfo.userName, message: prevState.messageText, time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }] }
                    }
                    return item
                }),
                messageText: ''
            }
        default:
            return {
                ...prevState
            }

    }
}