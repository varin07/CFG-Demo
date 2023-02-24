import React from 'react';
import './FindExternalPolicy.css';
class FindExternalPolicy extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '',
                     finalAnswer: -1,
                     showFinalAnswer: false
                    };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    handleSubmit(event) {
        var result = this.state.value; 
        this.setState({
            finalAnswer: result,
            showFinalAnswer : true
        });
        event.preventDefault();
    }
  
    render() {
      return (
        <div class='external-policy-container'>
          <h1 className='interner-policy-header'>GLSEN</h1>
            <form onSubmit={this.handleSubmit}>
            {/* <textarea class="EssayTextarea" value={this.state.value} onChange={this.handleChange} />   */}
            <label>
                <p class="under-form">Please Enter the State of the LEA:</p>
                <input name="name" class="input-form"/>
            </label> 
            {/* <input class="essaySubmit Essaybutton5" type="submit" value="Submit" /> */}
            <button type="submit" class="submit-form">Search <i class="fa fa-search" aria-hidden="true"/></button>  
            </form>
            {this.state.showFinalAnswer && 
                <div>
                    <h2 class="links">Please search through the following Links: </h2>
                    <p class="links"><a href="https://policy.cps.edu/download.aspx?ID=264">Chicago Public Schools</a></p>
                    <p class="links"><a href="http://www.smithton.stclair.k12.il.us/harassment-and-bullying-prevention.html">Illinois Private Schools</a></p>
                    <p class="links"><a href="https://www.isbe.net/Pages/Bullying-Prevention.aspx">Others</a></p>
                </div>}
        </div> 
        
      );
    }
  }

export default FindExternalPolicy

