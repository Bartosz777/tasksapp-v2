import { useEffect } from 'react'
import useTaskContext from '../hooks/useTaskContext'
import useAuthContext from '../hooks/useAuthContext'

import TaskForm from '../components/TaskForm'
import TaskDetails from '../components/TaskDetails'


const Home = () => {
    const { tasks, dispatch } = useTaskContext()
    const { user } = useAuthContext()


    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_TASKS', payload: json })
            }
        }

        if (user) {
            fetchTasks()
        }

    }, [dispatch, user])


    return (
        <div className='home-page'>
        <div className='task-details'>
            {tasks && tasks.map(
                task => (
                <TaskDetails key={task._id} task={task}/>
            ))}
        </div>
            <TaskForm />
        </div>
    )
}


export default Home