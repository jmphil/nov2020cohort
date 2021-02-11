import React, { Component } from 'react'

class Forms extends Component {
    constructor () {

    super(); 
    this.setState= {

        
    }
    
}

    handleChange = (e) => {

        console.log(e.target.value);

        this.setState({
            textValue: e.target.value
        })    
    } 

    handleCheckbox = (e) => {
        console.log(e.target.checked);

        this.setState({
            isValid: e.target.checked
        })
    }



  render() {
    return (
      <>
        <h1 className="text-center mt-5">Class Based Forms</h1>
        <div className="row mt-5">
          <div className="col-6 offset-3 formColor p-5 formFont">
            
            <form>

                <input type="text" value={this.state.textValue} onChange={this.handleChange} />

                <br />

                <input className="custom-control custom-checkbox" type="checkbox" checked={this.state.isValid} onChagne={this.handleCheckbox} />

                <input type="submit" />


            </form>


          </div>
        </div>
      </>
    )
  }
}
export default Forms