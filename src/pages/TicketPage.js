import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TicketPage = () => {
    const [formData, setFormData] = useState({
        id: 1000,
        status: 'not started',
        progress: 0,
        timeStamp: new Date().toISOString()
    })
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        const response = true;
        e.preventDefault();
        if (!editMode) {
            console.log("form data", formData)
            const response = await axios.post("http://localhost:3000/tickets",
                { ...formData }
            );
            const success = response.status;
            success == 201 && (navigate('/'));
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
    const categories = ['test1', 'test2']
    let editMode = false;
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

                        <lable>Category</lable>
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
                            name="new-category"
                            type='text'
                            onChange={handleChange}
                            required={true}
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

                            <lable htmlFor='status'>status</lable>
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