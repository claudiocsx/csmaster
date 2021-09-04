import './style.css'

export const TopBar = () => {
    return(
        <header>
            <div className="container">
                <div className="topbarLeft">
                    <div className="logoImg">
                        <a href="#">csmaster</a>
                    </div>
                </div>

                <div className="topbarCenter">
                        <ul>
                            <li><a href="#">produtos</a></li>
                            <li><a href="#">serviços</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Agendamento</a></li>
                        </ul>
                </div>
                <div className="topbarRigth">    
                        <div className="topbarBtn">
                            <a href="#">
                                produtos
                            </a>
                        </div>
                    </div>

            </div>
        </header>
    )
}