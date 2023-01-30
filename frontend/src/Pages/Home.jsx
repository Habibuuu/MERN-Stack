import axios from "axios";
import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

//Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const res = await axios.get('/api/workouts');
                dispatch({type: 'SET_WORKOUTS', payload: res.data})
            } catch (err) {
                console.log('Gagal membuat data');
            }
        }
        fetchWorkouts()
    }, [dispatch]);
    
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    );
}
 
export default Home;