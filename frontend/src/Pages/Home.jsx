import axios from "axios";
import { useEffect, useState } from "react"

//Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    //Fetch
    // useEffect(() => {
    //     const fetchWorkouts = async () => {
    //         const response = await fetch('/api/workouts')
    //         const json = await response.json()

    //         if (response.ok) {
    //             setWorkouts(json);
    //         }
    //     }

    //     fetchWorkouts()
    // }, []);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const res = await axios.get('/api/workouts');
                const json = res.data;
                setWorkouts(json);
            } catch (err) {
                console.log('Gagal membuat data');
            }
        }
        fetchWorkouts()
    }, []);
    
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