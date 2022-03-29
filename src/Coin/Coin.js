import React, {useState} from 'react';
import Image from '../Image/Image';

const Coin = () => {
const coinArray = ["heads", "tail"];
const [number, setNumber] = useState("");

const handleFlip = () => {
const random = Math.floor(Math.random() * coinArray.length);
console.log(random);
setNumber(random);
}

    return ( 
    <>
    <Image coin={coinArray[number]} />
    <button onClick={handleFlip}>Flip Coin</button>
    </> );
}
 
export default Coin;