import axios from "axios";
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
          }

        const workout = {title, load, reps}
        
        try {
            const res = await axios.post('/api/workouts', workout, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added')
            dispatch({type: 'CREATE_WORKOUT', payload: res.data})
        } catch (err) {
            setError(err.response.data.error)
            setEmptyFields(err.response.data.emptyFields)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new workout</h3>
            <label>Extrasize Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Load (in kg):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />
            <label>Reps:</label>
            <input 
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
 
export default WorkoutForm;