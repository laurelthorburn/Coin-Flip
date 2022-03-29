import './Image.css'

const Image = ({coin}) => {
    return ( 
        <>
        <img className="Image--coin" src={`https://tinyurl.com/react-coin-${coin}-jpg`} alt={coin} />
        </>
     );
}
 
export default Image;