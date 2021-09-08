import { Products } from "../../components/Products"
import { Servico } from "../../components/Servico"
import { TopBar } from "../../components/TopBar"

export const Home = () => {
    return(
        <div>
            <TopBar/>
            <div>
                <Products/>
                <Servico/>
            </div>
        </div>
    )
}