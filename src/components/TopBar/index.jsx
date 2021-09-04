import './style.css'

export const TopBar = () => {
    return(
        <header>
            <div className="container">
                <div className="topbarLeft">
                    <div className="logoImg">
                        <img src="/assets/logo.jpg" alt="" />
                    </div>
                </div>

                <div className="topbarCenter">
                    <div className="links">
                        <ul>
                            <li ><a className="itemLinks" href="#">produtos</a></li>
                            <li ><a className="itemLinks" href="#">serviços</a></li>
                            <li ><a className="itemLinks" href="#">Sobre</a></li>
                            <li ><a className="itemLinks" href="#">Agendamento</a></li>
                        </ul>
                    </div>
                        
                </div>
                <div className="topbarRigth">    
                        <div className="topbarBtn">
                            <a href="#">
                                meu Carinho
                            </a>
                        </div>
                    </div>

            </div>
        </header>
    )
}