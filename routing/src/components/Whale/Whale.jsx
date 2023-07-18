import {useLocation} from 'react-router-dom';
import BlueWhale from "./BlueWhale";
import Beluga from "./Beluga";

function Whale() {
    const {search} = useLocation();
    const match = search.match(/type=(.*)/);
    const type = match?.[1];
    return ( 
        <div>
            <h2>Whale</h2>
            {type === "beluga" && <Beluga/>}
            {type === 'blue' && <BlueWhale/>}
        </div>
     );
}

export default Whale;