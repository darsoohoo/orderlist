class Order {
    constructor(prescription) {
        this.prescription = prescription;
    }
}

class OrderList {
    constructor() {
        this.list = {};
    }

    add(presc) {
        const order = new Order(presc)
            if(!this.list[presc]) {
                this.list[presc] = 1;
            } else {
                this.list[presc]++;
            }
    }

    removeAt(index) {
        // remove at index
        const key = Object.keys(this.list)[index]
        if(key) {
            this.list[key]--;
        }
    }
}


const ol = new OrderList;

ol.add('coughdrop')
ol.add('coughdrop')
ol.add('nasalspray')
ol.add('eyedrops')
ol.add('eyedrops')
ol.add('eyedrops')
ol.removeAt(2);
console.log(ol);

module.exports = OrderList;