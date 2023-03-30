import useTaskContext from '../hooks/useTaskContext'
import useAuthContext from '../hooks/useAuthContext'

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({ task }) => {
    const { dispatch } = useTaskContext()   
    const { user } = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch('/api/tasks/' + task._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
              }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_TASK', payload: json })
        }
    }

    return (
            <div className='task'>
                <div className='task-header'>
                    <h3>{task.title}</h3>
                    <span onClick={handleClick} className='delete-button material-symbols-outlined'>Delete</span>
                </div>
                <p>{task.content}</p>
                <p>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
            </div>
    )
}

export default TaskDetails