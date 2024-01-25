
import "./NetflixIndex.css";
import { NetflixHeader } from "./NetflixHeader";
import { NetflixMain } from "./Netflixmain";


export function NetflixIndex(){
    return(
        <div className="background-image">
            <div className="background-shade">
            <NetflixHeader />
            <NetflixMain />
            </div>
        </div>
    )
}