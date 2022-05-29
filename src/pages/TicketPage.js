import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CategoriesContext from "../context";

const TicketPage = ({ editMode }) => {
    const { categories, setCategory } = useContext(CategoriesContext)
    const [formData, setFormData] = useState({
        status: 'not started',
        category: categories[0],
        progress: 0,
        timeStamp: new Date().toISOString()
    })
    const navigate = useNavigate()
    const { id } = useParams()

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3000/tickets/${id}`)
        setFormData(response.data)
    }
    useEffect(() => {
        editMode && fetchData()
    }, [1])
    const handleSubmit = async (e) => {
        const response = true;
        e.preventDefault();
        if (!editMode) {
            const response = await axios.post("http://localhost:3000/tickets",
                { ...formData }
            );
            const success = response.status;
            success == 201 && (navigate('/'));
        }
        else {
            const response = await axios.put(`http://localhost:3000/tickets/${id}`,
                { ...formData }
            );
            const success = response.status;
            console.log("editmode", formData)
            success == 200 && (navigate('/'));
        }
    }
    const handleChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setFormData((prevState) => (
            {
                ...prevState,
                [name]: value
            }
        )
        )

    }
    return (
        <div className="ticket">
            <h1>{editMode ? 'Update Ticket' : 'Create Ticket'}</h1>
            <div className="ticket-container">
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.title}
                        />

                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            name="description"
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.description}
                        />

                        <label>Category</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            {
                                categories?.map((category, _index) => (

                                    <option key={_index} value={category}>{category}</option>

                                ))
                            }
                        </select>
                        <label htmlFor="new-category">New Category</label>
                        <input
                            id="new-category"
                            name="category"
                            type='text'
                            onChange={handleChange}
                            value={formData.category}
                        />
                        <label>Priority : </label>
                        <div className="multiple-input-container">
                            <input
                                id="priority-1"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={1}
                                checked={formData.priority == 1}
                            />
                            <label htmlFor='priority-1'>1</label>
                            <input
                                id="priority-2"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={2}
                                checked={formData.priority == 2}
                            />
                            <label htmlFor='priority-2'>2</label>
                            <input
                                id="priority-3"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={3}
                                checked={formData.priority == 3}
                            />
                            <label htmlFor='priority-3'>3</label>
                            <input
                                id="priority-4"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={4}
                                checked={formData.priority == 4}
                            />
                            <label htmlFor='priority-4'>4</label>
                            <input
                                id="priority-5"
                                name="priority"
                                type="radio"
                                onChange={handleChange}
                                value={5}
                                checked={formData.priority == 5}
                            />
                            <label htmlFor='priority-5'>5</label>
                        </div>

                        {editMode && <>
                            <input
                                id="progress"
                                name="progress"
                                type="range"
                                onChange={handleChange}
                                value={formData.progress}
                                min="0"
                                max="100" />
                            <label htmlFor="progress">Progress</label>

                            <label htmlFor='status'>status</label>
                            <select id="status" value={formData.status} onChange={handleChange}>
                                <option value='done' selected={formData.status === 'done'}>done</option>
                                <option value='working on it' selected={formData.status === 'working on it'}>working on it</option>
                                <option value='in progress' selected={formData.status === 'in progress'}>in progress</option>
                            </select></>
                        }
                        <input type="submit" />
                    </section>
                    <section>
                        <label htmlFor="owner">Owner</label>
                        <input
                            id="owner"
                            name="owner"
                            type='text'
                            onChange={handleChange}
                            required={true}
                            value={formData.owner}
                        />
                        <label htmlFor="avatar">Avatar</label>
                        <input
                            id="avatar"
                            name="avatar"
                            type='url'
                            onChange={handleChange}
                            required={true}
                            value={formData.avatar}
                        />
                        <div className="image-preview">
                            {
                                formData.avatar && (
                                    <img src={formData.avatar} alt='image of owner' />
                                )
                            }
                        </div>
                    </section>
                </form>
            </div>
        </div>
    )
}
export default TicketPage;