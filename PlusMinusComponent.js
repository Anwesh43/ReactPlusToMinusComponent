import React, {Component} from 'react'
import LineComponent from './LineComponent'
import StateObject from './StateObject'
import {animQueue} from './AnimQueue'
export default class PlusMinusComponent extends Component {
    constructor() {
        super()
        this.stateObj = new StateObject()
        this.state = {rot : 90}
    }


    startAnim() {
        this.stateObj.startUpdating(() => {
            animQueue.start(() => {
                return this.stateObj.update((sc) => {
                    const rot = 90 * (1 - sc)
                    this.setState({rot})
                })
            })
        })
    }

    render() {
        return <div onClick ={this.startAnim.bind(this)}>
                  {[0, 1].map((num)=><LineComponent key={`line_${num}`} i = {num} rot={this.state.rot}/>)}
              </div>
    }
}
