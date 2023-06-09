import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isLoading, error } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(email, password)
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className='login-form'>
                
                <label>Email</label>
                <input 
                type='email' 
                value={email} 
                onChange={e => setEmail(e.target.value)}                    
                />
                
                <label>Password</label>
                <input 
                type='password' 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                />
                
                <button disabled={isLoading}>Sign up</button>
                {error && <p className='error'>{error}</p>}

            </form>
        </div>
    )
}

export default Signup