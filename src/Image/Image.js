const Image = ({coin}) => {
    return ( 
        <>
        <img src={`https://tinyurl.com/react-coin-${coin}-jpg`} alt={coin} />
        </>
     );
}
 
export default Image;