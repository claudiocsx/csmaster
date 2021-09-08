import './style.css'
export const Login = () => {
    return(
        <div className="loginContainer" >
           
            <div className="login">
            <h1 className="loginTitle" >login</h1> 
              <label htmlFor="" className="loginLabel">e-mail</label>
              <input className="loginInput" type="email" />
              <label htmlFor=""  className="loginLabel">Senha</label>
              <input className="loginInput" type="password" />
              <button className="loginBtn" >Login</button>
            
            </div>
        </div>
    )
}