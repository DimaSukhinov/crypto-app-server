const {buildSchema} = require('graphql')

const schema = buildSchema(`

    type Value {
        id: String
        rank: String
        symbol: String
        name: String
        supply: String
        maxSupply: String
        marketCapUsd: String
        volumeUsd24Hr: String
        priceUsd: String
        changePercent24Hr: String
        vwap24Hr: String
        explorer: String
    }
    
    type GraphicData {
        date: String
        priceUsd: String
        time: Int
        circulatingSupply: String
    }

    type Query {
        getAllValues: [Value]
        getGraphicData(id: String!): [GraphicData]
    }
`)

module.exports = schema
