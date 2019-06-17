import React from 'react'
import ReactDom from 'react-dom'
import './nav.css'




class Navmenu extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isclicked: false 
        }
    }
    showContent=(event)=>{
            if (this.state.isclicked === true){
                document.getElementById('aqua').style.color="black"
            }
            else{
                document.getElementById('aqua').style.color="aqua"
            }
            this.setState({isclicked:!this.state.isclicked})
    }




    render(){
        return (
            <div className="navigation-bar">
                <a href="#">Home</a>
                <a href="#" onClick={this.showContent} id="aqua">Services</a>
                <a href="#">Contact</a>
                {this.state.isclicked ? <div className='dropdown-content' id="showorhide">
                    <ul>
                       <li><a href='#'>For Etrepreneurs</a></li>
                       <li><a href='#'>For students</a></li>
                       <li><a href='#'>For for hobiest</a></li>
                    </ul>
                </div> : null}
            </div>
        )
    }

}


export default Navmenu; 