import { useState } from "react";
import '../styles/Login.css'
import { Navigate, useNavigate } from "react-router";
const Login = () => {

    const nagivate = useNavigate()
    const [data, setData] = useState({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    })

    const submit = (e) => {
        e.preventDefault()
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                nagivate('/')
            }).catch(e => console.error(e))
    }

    if (localStorage.getItem('token')) return <Navigate to='/' />

    return (
        <div className="container5Feo">
            <div className="login-container">
                <h1 className="login-container__title">
                    Iniciar sesión
                </h1>
                <form onSubmit={submit} className="login-container__form">
                    <div className="login-container__field">
                        <label className="login-container__label" htmlFor="email">Email</label>
                        <input
                            className="login-container__input"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => {
                                setData({ ...data, email: e.target.value })
                            }}
                        />
                    </div>
                    <div className="login-container__field">
                        <label className="login-container__label" htmlFor="password">Password</label>
                        <input
                            className="login-container__input"
                            name="password"
                            type="password"
                            value={data.password}
                            onChange={
                                (e) => {
                                    setData({ ...data, password: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div className="login-container__submit">
                        <button className="login-container__button">
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </ div>

    )
}
export default Login;