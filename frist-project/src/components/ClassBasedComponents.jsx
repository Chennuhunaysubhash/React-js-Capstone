import { Component } from "react";

class ClassBasedComponents extends Component{
    state={
        showText: false,
        count : 0,
        changeColor: false,
        changeCountStyle : false
    };
    handleClick = () =>{
        console.log('button clicked');
        const {showText,count,changeColor} = this.state
        
        this.setState({
            //showText : !this.state.showText,
            //count : this.state.count+1
            showText : !showText,
            count : count+1,
            changeColor: !changeColor
        })
    }
    handleCount = () =>{
        console.log('button clicked');
        const {count} = this.state
        
        this.setState({
            //showText : !this.state.showText,
            //count : this.state.count+1
            
            count : count+1,
           
        })
    }
    componentDidMount(){
        console.log("this is called first time on page load");
        this.setState({
            showText : !this.state.showText,
           // count : this.state.count+1,
            changeColor: !this.statechangeColor
        })
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps,this.state);
        if(prevState && prevState.count !==this.state.count && this.state.count===10){
            this.setState({
                ...this.state,
                changeCountStyle: !this.state.changeCountStyle,
            });
        }
    }
    render(){
        console.log(this.state);
        console.log(this.state.count);
        const {showText,count,changeColor,changeCountStyle} = this.state
        return(<div>
           {
            showText ? ( <h4>class1 based component with state</h4>) : null
           }
           
            <button onClick={this.handleClick}>Toggle Text</button>
            <button onClick={this.handleCount}>Add+</button>
            {
            <h4 style={{color: changeColor ? 'red':'black'}}>class1 based component with state</h4>
           }
            <h4 style={{color: changeCountStyle? 'red':'black', fontSize: changeCountStyle? '30px':'12px',backgroundColor:changeCountStyle?'blue':'white'}}>{count}</h4>
        </div>);
    }
}
export default ClassBasedComponents;