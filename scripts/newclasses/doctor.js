class Doctor extends Traveler{

    constructor(name) {
        super(name)
        this.name = name

    }
    heal(traveler) {
        //returns traveler to healthy true
        traveler.isHealthy = true
    }

}