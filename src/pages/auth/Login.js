import { useRef, useState, useEffect, useContext } from 'react';
import { apiAuth } from '../../api/apiAuth';
import { useNavigate} from 'react-router-dom';
import React from 'react';

function Login() {
	const navigate = useNavigate();
	const userRef = useRef();
	const errRef = useRef();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, [])

	useEffect(() => {
		setErrMsg('');
	}, [email, password])

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const result = await apiAuth.login(
				{ password: password, email: email},
			);
			if(result.data){
				localStorage.setItem("token", result.data.token);
				setSuccess(true);
				navigate('/');
			}
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	}

	return(
		<div className='auth'>
			{success ? (
				<section>
					<h1>You are logged in!</h1>
					<br />
					<p>
						<a href="#">Go to Home</a>
					</p>
				</section>
			) : (
				<section>
					<p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">Email:</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>

						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
						/>
						<button className='buttonAuth'>Sign In</button>
					</form>
					<p>
						Need an Account?<br />
						<span className="line">
							{/*put router link here*/}
							<a href="#">Sign Up</a>
						</span>
					</p>
				</section>
			)}
		</div>
	)
}

export default Login;
