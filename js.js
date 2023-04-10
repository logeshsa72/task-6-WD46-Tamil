class Uberprice{
    constructor(distence,time)
    {
     this.distance = 16;
     this.time = time;
     this.fare = 3.00;
     this.minfare = 0.5;
     this.kmfare = 2;
    }
    calculation()
    {
        const timecost = this.time * this.minfare;
        const discost = this.distance * this.kmfare;
        const Uberfare = this.fare+timecost +discost;
        return Uberfare;
    }
}
const ride = new Uberprice(16,120);
console.log(ride.calculation());