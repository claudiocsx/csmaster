import { servico } from '../../data'
import { TopBar } from '../TopBar'
import './style.css'

export const Servico = () => {

    const serviços = servico

    return(
        <>
            
            {servico.length !==0 && <h1>Serviços</h1>}
          <div className="servicoContiner">
              {serviços.map(servico => (
                   <div className="servico" key={servico.servicoID}>
                   <div className="wapper">
                       <div className="main">
                        <span className='servicoTitle'>{servico.nome}</span>
                        <span className="servicoMim">50min</span>
                       </div>
                       <span className="servicoPrice">{servico.valo}</span>
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