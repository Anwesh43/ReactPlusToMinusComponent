import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PlusMinusComponent from './PlusMinusComponent'
class PlusMinusComponentDemo extends Component {
    constructor() {
        super()
    }

    render() {
        return (<div style={{width: "100%", height: "100%", backgroundColor: "#BDBDBD"}}>
                  <PlusMinusComponent/>
              </div>)
    }
}
ReactDOM.render(<PlusMinusComponentDemo/>, document.getElementById('container'))
