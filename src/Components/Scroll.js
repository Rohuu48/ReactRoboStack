import React from 'react';
 class Scroll extends React.Component{
    render(){
        return(
            <div style={{ overflow: 'scroll', border:'5 px slid black', height:'500px'}}>
                {this.props.children}
            </div>
            
        );
    }
 }
 export default Scroll;