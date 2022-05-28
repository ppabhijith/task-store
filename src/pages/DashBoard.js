import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import TicketCard from '../components/TicketCard'
import CategoriesContext from '../context';
const DashBoard = () => {
    const [tickets, setTicket] = useState(null);
    console.log("dsfa")
    const [categories, setCategory] = useContext(CategoriesContext);
    // const tickets = [
    //     {
    //         category: 'Q1 2022',
    //         color: 'Red',
    //         title: 'NFT safety 101 video',
    //         owner: 'Ania Kubow',
    //         avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg',
    //         status: 'Done',
    //         priority: 5,
    //         progress: 48,
    //         description: 'Make a video show casing how to work with NFTs',
    //         timestamp: '2022-02-11T07:36:17+0000'
    //     },
    //     {
    //         category: 'Q2 2022',
    //         color: 'blue',
    //         title: 'Build a bot',
    //         owner: 'Ania Kubow',
    //         avatar: 'https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg',
    //         status: 'Done',
    //         priority: 2,
    //         progress: 85,
    //         description: 'Make a video show casing how to work with NFTs',
    //         timestamp: '2022-02-13T07:36:17+0000'
    //     },
    //     {
    //         category: 'Q2 2022',
    //         color: 'blue',
    //         title: 'Build a bot',
    //         owner: 'Ania Kubow',
    //         status: 'in progress',
    //         priority: 4,
    //         progress: 28,
    //         description: 'Make a video show casing how to work with NFTs',
    //         timestamp: '2022-02-13T07:36:17+0000'
    //     }
    // ]
    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)',
    ]
    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    useEffect(() => {
        axios.get('http://localhost:3000/tickets')
            .then(response => setTicket(response.data));

    }, [])
    useEffect(() => {
        console.log(tickets)
        setCategory(...new Set(tickets?.map(({ category }) => category)))
    }, [tickets])
    // console.log(uniqueCategories);
    return (
        <div className="dash-board">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategorie, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategorie}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategorie)
                            .map((filteredTicket, _index) => (
                                < TicketCard
                                    key={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DashBoard;