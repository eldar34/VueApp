
const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const cars = [
			car('Chevrolet', 'Camaro', 'Dom', '2002', '+7 987 654 32 10', 'cars/chevrolet.png'),
			car('Volkswagen', 'SR-500', 'Sam', '2000', '+7 999 788 20 20', 'cars/volkswagen.png'),
			car('Audi', 'A-5', 'Din', '2010', '+7 722 523 75 88', 'cars/audi.png'),
		]
const log = (text, type, date = new Date()) => ({text, type, date})

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		logs: [],
		selectedCarIndex: 0,
		phoneVisibility: false,
		search: '',
		modalVisibility: false
	},
	methods: {
		selectCar(index){
			this.car = cars[index],
			this.selectedCarIndex = index
		},

		newOrder(){
			this.modalVisibility = false
			this.logs.push(
					log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
				)
		},

		cancelOrder(){
			this.modalVisibility = false
			this.logs.push(
					log(`Canceled order: ${this.car.name} - ${this.car.model}`, 'cnl')
				)
		}
	},
	computed: {
		phoneBtnText() {
			return this.phoneVisibility ? 'Hide phone' : 'Show phone';
		},
		filteredCars(){
			 
			return this.cars.filter(car => {
				return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
			})
		}
	},
	filters: {
		date(value){
			return value.toLocaleString()
		}
	}
})