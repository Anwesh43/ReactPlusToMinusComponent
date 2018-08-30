import React, {Component} from 'react'
const w = window.innerWidth, h = window.innerHeight, size = Math.min(w, h) /3
export default class LineComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {x : w/2 - size, y : h/2 - size, size : 2 * size}
    }

    componentDidMount() {
        window.onresize = () => {
            const newSize = Math.min(w, h) / 3
            this.setState({x : w/2 - newSize, size : 2 * newSize})
        }
    }

    render() {
        return <div style={{position: 'absolute', left : this.state.x, top : h/2,
        width : this.state.size, height : 0, border:'9px solid #3F51B5', borderRadius:'4px',
        transform:`rotateZ(${this.props.rot * this.props.i}deg)`}}>
               </div>
    }
}
