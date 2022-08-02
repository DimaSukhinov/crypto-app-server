const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const axios = require('axios')

const app = express()
app.use(cors())

const getValues = () => {
    try {
        return axios.get('https://api.coincap.io/v2/assets')
            .then(data => {
                return data.data.data
            })
    } catch (error) {
        console.log(error)
    }
}

const getGraphic = async (id) => {
    try {
        return axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=h1`)
            .then(data => {
                return data.data.data
            })
    } catch (error) {
        console.log(error)
    }
}

const root = {
    getAllValues: () => {
        return getValues()
    },
    getGraphicData: (data) => {
        return getGraphic(data.id)
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('Server started'))
