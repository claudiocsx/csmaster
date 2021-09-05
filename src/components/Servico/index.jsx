import { servico } from '../../data'
import './style.css'

export const Servico = () => {

    const serviços = servico

    return(
        <>
            {servico.length !==0 && <h1>Serviços</h1>}
          <div className="servicoContiner">
              {serviços.map(servico => (
                   <div className="servico">
                   <div className="wapper">
                       <div className="main">
                        <span className='servicoTitle'>{servico.nome}</span>
                        <span className="servicoMim">50min</span>
                       </div>
                       <span className="servicoPrice">R$20</span>
                   </div>
                   <div className="servicoBtn">
                       <button>Agenda</button>
                   </div>
               </div> 
              ))}
           
          </div>   
        </>
    )
}