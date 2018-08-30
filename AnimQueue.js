class AnimQueue {
    constructor() {
        this.cbs = []
    }

    start(cb) {
        if (this.cbs.length == 0) {
            this.interval = setInterval(() => {
                this.cbs.forEach((cb1) => {
                    if (cb1()) {
                        this.cbs = this.cbs.filter(cb2 => cb1 != cb2)
                        console.log(this.cbs)
                        if (this.cbs.length == 0) {
                            clearInterval(this.interval)
                        }
                    }
                })
            }, 50)
        }
        this.cbs.push(cb)
    }
}
const animQueue = new AnimQueue()
export {animQueue}
