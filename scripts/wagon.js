class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []

    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) return this.passengers.push(traveler)
    }
    // work on making it shorter instead
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index++) {
            if (this.passengers[index].isHealthy === false) {
                return true
            }

        }
        return false
    }
    //make succinct
    totalFood() {
        let food = 0
        for (let index = 0; index < this.passengers.length; index++) {
            food += this.passengers[index].food


        }

        return food
    }
}