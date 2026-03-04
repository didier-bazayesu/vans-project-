import { createServer, Model } from "miragejs"

createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", { id: "1", hostId: "123", name: "Modest Explorer", price: 60, description: "Designed to get you out of the house and into nature with solar panels and a kitchenette.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" })
        server.create("van", { id: "2", hostId: "123", name: "Beach Bum", price: 80, description: "A portable home away from home, perfect for surfers and beach lovers.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" })
        server.create("van", { id: "3", hostId: "123", name: "Reliable Red", price: 100, description: "Comfortable and cozy with plenty of space to stretch out and a small kitchen.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury" })
        server.create("van", { id: "4", name: "Dreamfinder", price: 65, description: "Features a high ceiling and large windows for a light, airy travel experience.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple" })
        server.create("van", { id: "5", name: "The Cruiser", price: 120, description: "For those who love comfort and luxury with spacious interiors and ample storage.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury" })
        server.create("van", { id: "6", name: "Green Wonder", price: 70, description: "A sustainable vehicle perfect for stylish, eco-friendly travel anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
        server.create("van", { id: "7", hostId: "123", name: "Mountain Mover", price: 95, description: "4x4 drive and heavy-duty heating for the ultimate alpine adventure.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged" })
        server.create("van", { id: "8", name: "Starlight Suite", price: 160, description: "Luxury glass-roof van designed for stargazing in the wilderness.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury" })
        server.create("van", { id: "9", hostId: "123", name: "Urban Nomad", price: 55, description: "Compact and stealthy, ideal for city explorers and weekend warriors.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple" })
        server.create("van", { id: "10", name: "Desert Drifter", price: 85, description: "Upgraded filtration systems and extra water storage for desert trekking.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" })
        server.create("van", { id: "11", hostId: "123", name: "Ocean Breeze", price: 75, description: "Lightwood interior with a built-in surfboard rack and outdoor shower.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple" })
        server.create("van", { id: "12", hostId: "123", name: "The Executive", price: 180, description: "Mobile office meets 5-star hotel. High-speed satellite internet included.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury" })
        server.create("van", { id: "13", name: "Rustic Rover", price: 65, description: "Vintage feel with modern mechanics. Simple, reliable, and full of character.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "simple" })
        server.create("van", { id: "14", name: "Trail Titan", price: 110, description: "Reinforced chassis and off-road lighting for deep forest exploration.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged" })
        server.create("van", { id: "15", hostId: "123", name: "Cloud Nine", price: 200, description: "The pinnacle of van life. Full-sized kitchen and premium leather finishes.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury" })
    },

    routes() {
        this.namespace = "api"
        this.get("/vans", (schema) => schema.vans.all())
        this.get("/vans/:id", (schema, request) => schema.vans.find(request.params.id))
        this.get("/host/vans", (schema) => {
            return schema.vans.where({ hostId: "123" })
        })

        this.get("/host/vans/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.vans.findBy({ id, hostId: "123" })
        })
    } 
})