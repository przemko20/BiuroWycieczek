const { Trip, Person } = require('./models')


exports.configureRoutes = (server) => {
    return server.route([
        {
        //Wszystkie wycieczki
        method: 'GET',
        path: '/trips',
        handler: () => {
            return Trip.findAll()
        }
    }, { //Wybrana wycieczka
        method: 'GET',
        path: '/trips/{id}',
        handler: (request) => {
            return Trip.findById(request.params.id)
        }
    }, { //Dodanie wycieczki
        method: 'POST',
        path: '/trips',
        handler: (request) => {
            const trip = Trip.build(request.payload.trip)
            return trip.save()
        }
    }, { //Modyfikacja wycieczki
        method: ['PUT', 'PATCH'],
        path: '/trips/{id}',
        handler: async (request) => {
            const trip = await Trip.findById(request.params.id)
            trip.update(request.payload.trip)

            return trip.save()
        }
    }, {//Usuwanie wycieczki
        method: 'DELETE',
        path: '/trips/{id}',
        handler: async (request) => {
            const trip = await Trip.findById(request.params.id)

            return trip.destroy()
        }
    },
    /////////////////////////////   OSOBY   ///////////////////////////
     
    {//Wszystkie osoby
        method: 'GET',
        path: '/persons',
        handler: () => {
            return Person.findAll()
        }
    }, { //Wybrana osoba
        method: 'GET',
        path: '/persons/{id}',
        handler: (request) => {
            return Person.findById(request.params.id)
        } 
    }, { //Dodanie osoby
        method: 'POST',
        path: '/persons',
        handler: (request) => {
            const person = Person.build(request.payload.person)

            return person.save()
        }
    }, {
        method: ['PUT', 'PATCH'],
        path: '/persons/{id}',
        handler: async (request) =>{
            const person = await Person.findById(request.params.id)
            person.update(request.params.person)

            return person.save()
        }
    }, {
        method: ['DELETE'],
        path: '/persons/{id}',
        handler: async (request) => {
            const person = await Person.findById(request.params.id)

            return person.destroy()
        }
    }
    
])
}