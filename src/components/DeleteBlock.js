import axios from "axios"

const DeleteBlock = ({ id }) => {
    const deleteBlock = async () => {
        const response = await axios.delete(`http://localhost:3000/tickets/${id}`)
        console.log("delete clicked", response.status)
        response.status && window.location.reload()
    }
    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={() => { deleteBlock() }}>x</div>
        </div>
    )
}
export default DeleteBlock;