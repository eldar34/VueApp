
const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})

new Vue({
	el: '#app',
	data: {
		cars: [
			car('Chevrolet', 'Camaro', 'Dom', '2002', '+7 987 654 32 10', 'cars/chevrolet.png'),
			car('Volkswagen', 'SR-500', 'Sam', '2000', '+7 999 788 20 20', 'cars/volkswagen.png'),
			car('Audi', 'A-5', 'Din', '2010', '+7 722 523 75 88', 'cars/audi.png'),
		]
	}
})