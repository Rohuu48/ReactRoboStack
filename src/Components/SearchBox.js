import React from 'react';
import 'tachyons';

class SearchBox extends React.Component{
    render(){
        return(
            <div className='pa3'>
                <input
                    className='bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5' 
                    onChange={this.props.handleChange}
                    type='search' 
                    placeholder='Search Robots'/>
            </div>
        );
    }
}

export default SearchBox;