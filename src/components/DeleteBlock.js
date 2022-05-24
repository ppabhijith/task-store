const DeleteBlock = () => {
    const deleteBlock = () => {
        console.log("delete clicked")
    }
    return (
        <div className="delete-block">
            <div className="delete-icon" onClick={() => { deleteBlock() }}>x</div>
        </div>
    )
}
export default DeleteBlock;