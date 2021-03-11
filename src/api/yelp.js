import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer rpnZx4Lku1vEJcFVuqP1ICR7gv_K7MsyHvlLGYLFnzX8uTJlxoMeMuERXPuXhGR2Q0VrNByRErrX8xjWr9ZtHHk_K4lEimW7kNiCbOCO1PB8HaNHLkJTdTMUNwRKYHYx',
    },
})
