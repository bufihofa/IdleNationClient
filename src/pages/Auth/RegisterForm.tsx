import './LoginForm.css'

const RegisterForm = () => {
    return (
        <div className="glitch-form-wrapper">
        <form className="glitch-card">
            <div className="card-header">
            <div className="card-title">
            
                <span>Register</span>
            </div>

            <div className="card-dots"><span></span><span></span><span></span></div>
            </div>

            <div className="card-body">
            <div className="form-group">
                <input
                type="text"
                id="username"
                name="username"
                required={true}
                placeholder="w"
                />
                <label className="form-label" data-text="EMAIL">EMAIL</label>
            </div>

            <div className="form-group">
                <input
                type="password"
                id="password"
                name="password"
                required={true}
                placeholder=""
                />
                <label  className="form-label" data-text="ACCESS_KEY">ACCESS_KEY</label>
            </div>

            <button data-text="CONNECTION" type="submit" className="submit-btn">
                <span className="btn-text">CONNECTION</span>
            </button>
            </div>
        </form>
        </div>

    );
}
export default RegisterForm;