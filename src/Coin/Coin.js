import React, {useState} from 'react';
import Image from '../Image/Image';
import './Coin.css';

const Coin = () => {
const coinArray = ["heads", "tail"];
const [number, setNumber] = useState("");
const [flips, setFlip] = useState(0);
const [heads, setHeads] = useState(0);
const [tails, setTails] = useState(0);

const handleFlip = () => {
const random = Math.floor(Math.random() * coinArray.length);
let currentTails = tails;
let currentHeads = heads;
let currentFlips = flips;
setFlip(currentFlips + 1);

random === 0 ? setHeads(currentHeads + 1) : setTails(currentTails + 1);
setNumber(random);
}

    return ( 
    <div className="Coin">
        <div className="Coin--container">
    <h1>Let's Flip a Coin</h1>
    {number !== "" && <Image coin={coinArray[number]} />}
    Out of {flips}, there have been {heads} heads and {tails} tails.
    <button onClick={handleFlip}>Flip Coin</button>
    </div>
    </div> );
}
 
export default Coin;