import {Dogcard,Weather} from './dogcard';
//import Name from './Name';
function App(){
    return(
        <>
            hello
            <nav><Weather/></nav>
            <div>
            <Dogcard name ='bruno' Image='https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?cs=srgb&dl=pexels-pixabay-257540.jpg&fm=jpg'/>
            <Dogcard name ='tiger' Image='https://th.bing.com/th/id/OIP.kh9lyCfew3Bw26mVTxs_MQHaEo?rs=1&pid=ImgDetMain'/>
            
            </div>
           
        </>
    );
}

export default App;