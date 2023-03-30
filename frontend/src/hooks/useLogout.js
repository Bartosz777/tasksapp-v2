import useAuthContext from './useAuthContext'
import useTaskContext from './useTaskContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchTasks } = useTaskContext()

    const logout = async () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
        dispatchTasks({ type: 'SET_TASKS', payload: null })
    }

    return { logout }
}
