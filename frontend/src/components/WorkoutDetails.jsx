import axios from "axios"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

//Date FNS
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import {id as locale} from 'date-fns/locale';

const WorkoutDetails = ({ workout }) => {
    const dateFormat = formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true, locale})
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        try {
            const res = await axios.delete('/api/workouts/' + workout._id)
            console.log('Deleted workout')
            dispatch({type: 'DELETE_WORKOUT', payload: res.data})
        } catch (err) {
            console.log('Delete Failed')
        }
    }
    
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{dateFormat}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
        </div>
    );
}
 
export default WorkoutDetails;