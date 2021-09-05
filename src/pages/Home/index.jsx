import { Products } from "../../components/Products"
import { TopBar } from "../../components/TopBar"

export const Home = () => {
    return(
        <div>
            <TopBar/>
            <div>
                <Products/>
            </div>
        </div>
    )
}