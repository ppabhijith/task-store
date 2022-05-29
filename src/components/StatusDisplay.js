const StatusDisplay = ({ status }) => {
    const getColor = (status) => {
        let color;
        switch (status) {
            case 'Done': color = 'rgb(186,255,201)'
                break;
            case 'in progress': color = '#e3e78d'
                break;
            default: color = '#8c8ccb';
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