
const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const cars = [
			car('Chevrolet', 'Camaro', 'Dom', '2002', '+7 987 654 32 10', 'cars/chevrolet.png'),
			car('Volkswagen', 'SR-500', 'Sam', '2000', '+7 999 788 20 20', 'cars/volkswagen.png'),
			car('Audi', 'A-5', 'Din', '2010', '+7 722 523 75 88', 'cars/audi.png'),
		]

new Vue({
	el: '#app',
	data: {
		cars: cars,
		car: cars[0],
		selectedCarIndex: 0,
		phoneVisibility: false
	},
	methods: {
		selectCar: function(index){
			this.car = cars[index],
			this.selectedCarIndex = index
		}
	}
})