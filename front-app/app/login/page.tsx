"use client"

import {useState} from "react";

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    async function submitForm(event: any) {
        console.log(event)

        event.preventDefault();
        setError("");

        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        const data = await response.json();
        if (!response.ok) {
            setError(data.message);
            return;
        }

        console.log(data.access_token);
        localStorage.setItem("access_token", data.access_token);
    }


    return (
        <>
            <div className="card-middle card position-absolute top-50 start-50 translate-middle">
                <div className="card-header">
                    Entrar em sua conta
                </div>

                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <form onSubmit={submitForm}>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                placeholder="nome@exemplo.com"
                                required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <div className="input-group">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="••••••••"
                                    required />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-outline-secondary" onClick= {() => setShowPassword(!showPassword)}>
                                        {showPassword ? (<i className="bi bi-eye"/>) : (<i className="bi bi-eye-slash"/>)}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary" type="submit">
                            Entrar
                        </button>
                    </form>

                    { error != "" && (
                        <p className="top-10"> {error} </p>
                    )}
                </div>
            </div>
        </>
    )
}