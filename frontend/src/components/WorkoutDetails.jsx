import axios from "axios"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({ workout }) => {
    const dateFormat = new Date(workout.createdAt).toLocaleDateString('id').toString('MMMM YYYY')
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        try {
            const res = await axios.delete('/api/workouts/' + workout._id)
            console.log('Deleted workout')
            dispatch({type: 'DELETE_WORKOUT', payload: res.data})
        } catch (err) {
            
        }
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