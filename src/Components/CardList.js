import React from 'react';
import Card from './Card';

class CardList extends React.Component{
   
    render(){
       
        return(
            <div>
                {    
                    this.props.robots.map((user,index)=>{
                        return(
                            <Card 
                            name={this.props.robots[index].name} 
                            id={this.props.robots[index].id} 
                            email={this.props.robots[index].email} />
                        );
                    })
                }
            </div>
            );
    }
}

export default CardList;


