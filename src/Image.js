 function Image(props){
    // eslint-disable-next-line jsx-a11y/alt-text
    return(<div className ="image-box">
      <img src={props.src} alt={props.alt || ''} /> 
    
    </div>);
    
     }
     export default Image;