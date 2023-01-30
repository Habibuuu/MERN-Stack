const WorkoutDetails = ({ workout }) => {
    const dateFormat = new Date(workout.createdAt).toLocaleDateString('id').toString('MMMM YYYY')

    const handleClick = () => {
        
    }
    
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{dateFormat}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    );
}
 
export default WorkoutDetails;