import { produtos } from '../../data'
import './style.css'

export const Products = () => {
    
    const mercadoria = produtos

    return(
        <>
            {mercadoria.length !== 0 && <h1>Produtos</h1>}
            <div className="containerProducts">
                {mercadoria.map((p)=>(
                    <div className='products' key={p.produtosId}>
                        <div className="wapper">
                            <div className="productImg">
                                <img src={p.img} alt="" className="img" />
                            </div>
                            <div className="productTitle">
                                <p>{p.nome}</p>
                            </div>
                            <div className="productDesc">
                                <span> {p.desc} </span>
                            </div>
                            <div className="productPrice">
                                <span> {p.valor} </span>
                            </div>
                            <div className="productBtn">
                                <button>Add produto</button>
                            </div>
                    </div>
                </div> 
                ))}
            
            </div>
        </>
    )
} 