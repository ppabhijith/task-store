const StatusDisplay = ({ status }) => {
    const getColor = (status) => {
        let color;
        switch (status) {
            case 'Done': color = 'rgb(186,255,201)'
                break;
            case 'in progress': color = 'red'
                break;
            default: color = 'blue';
        }
        return color;
    }
    return (
        <div className="status-display" style={{ backgroundColor: getColor(status) }}>
            {status}
        </div>
    )
}
export default StatusDisplay;