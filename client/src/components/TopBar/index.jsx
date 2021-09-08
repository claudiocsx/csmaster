import { Link } from 'react-router-dom'
import './style.css'

export const TopBar = () => {
    return(
        <header>
            <div className="container">
                <div className="topbarLeft">
                    <div className="logoImg">
                        <Link to='/'>
                            <img src="/assets/logo.jpg" alt="" />
                        </Link>
                    </div>
                </div>

                <div className="topbarCenter">
                    <div className="links">
                        <ul>
                            <li ><Link to='/produtos' className="itemLinks" >produtos</Link></li>
                            <li ><Link to='/servico' className="itemLinks" >serviços</Link></li>
                            <li ><Link to='/Sobre' className="itemLinks" >Sobre</Link></li>
                            <li ><Link to='/agendamentos' className="itemLinks" >Agendamento</Link></li>
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