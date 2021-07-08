import React from 'react';
import 'tachyons'

const Main = () => {
    return ( 
        <div >
        <h1 className='title' style={{fontSize: '2.5rem'}}>NICE TO VIRTUALLY MEET YOU.</h1>
            <p className='text' style={{fontSize: '2rem', textAlign: 'center'}}>I am Mariam. This webpage contains my projects.</p> 
          <ul className='tc' id="res-ul">
          <a href="https://www.behance.net/gallery/123100525/MALEO" target="_blank"  rel="noopener noreferrer"><li id="res-link" className="dib shadow-2 pa5 ma2 grow f2">UI UX Designs</li></a>
              <a href="https://mariamparvez.tech/" target="_blank"  rel="noopener noreferrer"><li id="res-link" className="dib shadow-2 pa5 ma2 grow f2">My Website</li></a>
              <a href="https://mariamparvez.github.io/designs/" target="_blank"  rel="noopener noreferrer"><li id="res-link" className="dib shadow-2 pa5 ma2 grow f2">Graphic Designs</li></a>
              <a href="https://mariamparvez.github.io/quote-generater/" target="_blank"  rel="noopener noreferrer"><li id="res-link" className="dib shadow-2 pa5 ma2 grow f2">Random Quote Generator </li></a>
              <a href="https://mariamparvez.github.io/robofriends/" target="_blank"  rel="noopener noreferrer"><li id="res-link" className="dib shadow-2 pa5 ma2 grow f2">RoboFriends React App</li></a>
          </ul>
      </div>
     );
}
 
export default Main;