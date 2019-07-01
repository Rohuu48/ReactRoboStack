import React from 'react';

import 'tachyons';

class Card extends React.Component{
    render(){
        return(
                <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'> 
                    
                 <div>
                    <img alt='robots' src={`https://robohash.org/${this.props.id}?200*200`} />
                    <div>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.email}</p>
                    </div>
                    </div> 
                    </div>               
            );
    }
}

export default Card;
