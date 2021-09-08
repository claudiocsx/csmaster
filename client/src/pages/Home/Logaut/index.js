import './style.css'
export const Logaut = () => {
    return(
        <div className="logoutContainer" >
           
            <div className="logout">
            <h1 className="logoutTitle" >Register </h1> 
              <label htmlFor="" className="logoutLabel">nome</label>
              <input className="logoutInput" type="text" />
              <label htmlFor="" className="logoutLabel">e-mail</label>
              <input className="logoutInput" type="email" />
              <label htmlFor=""  className="logoutLabel">Senha</label>
              <input className="logoutInput" type="password" />
              <button className="logoutBtn" >logout</button>
            
            </div>
        </div>
    )
}