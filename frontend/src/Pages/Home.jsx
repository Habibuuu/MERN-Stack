import axios from "axios";
import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

//Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    const { user } = useAuthContext()


    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const res = await axios.get('/api/workouts', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                dispatch({type: 'SET_WORKOUTS', payload: res.data})
            } catch (err) {
                console.log('Gagal membuat data');
            }
        }

        if (user) {
            fetchWorkouts()
        }
    }, [dispatch, user]);
    
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