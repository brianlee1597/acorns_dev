import Donations from './components/donations.js'
import allGifts from './components/gifts.js'
import { chartData } from './tempdb.js'

export default function (app) {

    app.get('/api/chartdata', (req, res) => {
        res.send(chartData)
    })
    
    app.get('/api/getloginstatus', (req, res) => { //sends userstatus to react on api call
        let loggedInUser = req.user
        loggedInUser === undefined? res.json("nologin"): res.send(loggedInUser)
    })
    
    app.get("/api/getallartistsin/gifts", (req, res) => {
        allGifts.distinct("artist").lean()
        .sort().exec((error, data) => {
            error? res.json('error'):
            data.length === 0? res.json("nogifts"):
            res.json(data)
        })
    })

    app.get("/api/getallartistsin/donations", (req, res) => {
        Donations.distinct("artist").lean()
        .sort().exec((error, data) => {
            error? res.json('error'):
            data.length === 0? res.json("nodonations"):
            res.json(data)
        })
    })
    
    app.get("/api/getalltypesin/gifts", (req, res) => {
        allGifts.distinct("type").lean()
        .sort().exec((error, data) => {
            error? res.json('error'):
            data.length === 0? res.json("nogifts"):
            res.json(data)
        })
    })

    //getalltypesin/donations

    app.get('/api/getallby', (req, res) => {
        const collection = req.query.collection === "gifts"? allGifts: Donations
        collection.find({}).lean()
        .sort(
            req.query.sortparam === 'goal'? {paidtoneededratio: -1}: 
            req.query.sortparam === 'deadline'? {dateending: 1}:
            {amountpaidsofar: -1}
        )
        .limit(12).then(gifts => res.json(gifts))
        .catch(error => console.log(error))
    })
    
    app.post("/api/getbiased", (req, res) => { //get pinnable data from gifts or donations 
        const collection = req.query.collection === 'gifts'? allGifts: Donations
        collection.find({artist: req.body.artist}) //search and find only the ones by user bias
        .lean() //get only the data not the mongoDB settings
        .sort({dateending: 1}) //sort by percentage of goal (money) raised
        .limit(5) //limit of components = 5
        .exec((error, data) => { //then execute sending data
            error? res.json("error"):
            data.length === 0? res.json("nogiftstothatartist"): //fix this
            res.json(data)
        })
    })
    
    app.get("/api/getgiftsby/artist", (req, res) => { //Gifts Section get by bias
        allGifts.find({artist: req.query.artist}) //search and find only the ones by user bias
        .lean() //get only the data not the mongoDB settings
        .sort({paidtoneededratio: -1}) //sort by percentage of goal (money) raised
        .limit(12) //limit of components = 5
        .exec((error, data) => { //then execute sending data
            error? res.json("error"):
            data.length === 0? res.json("nogiftstothatartist"):
            res.json(data)
        })
    })
    
    app.post("/api/getgiftsby/type", (req, res) => { //Gifts Section get by bias
        allGifts.find({type: req.body.type}) //search and find only the ones by user bias
        .lean() //get only the data not the mongoDB settings
        .sort({paidtoneededratio: -1}) //sort by percentage of goal (money) raised
        .limit(12) //limit of components = 5
        .exec((error, data) => { //then execute sending data
            error? res.json("error"):
            data.length === 0? res.json("nogiftstothattype"):
            res.json(data)
        })
    })

    app.get("/api/getdonationsby/artist", (req, res) => { //Gifts Section get by bias
        Donations.find({artist: req.query.artist}) //search and find only the ones by user bias
        .lean() //get only the data not the mongoDB settings
        .sort({paidtoneededratio: -1}) //sort by percentage of goal (money) raised
        .limit(12) //limit of components = 5
        .exec((error, data) => { //then execute sending data
            error? res.json("error"):
            data.length === 0? res.json("nodonationstothatartist"):
            res.json(data)
        })
    })
    
    app.post("/api/getdonationsby/type", (req, res) => { //Gifts Section get by bias
        Donations.find({type: req.body.type}) //search and find only the ones by user bias
        .lean() //get only the data not the mongoDB settings
        .sort({paidtoneededratio: -1}) //sort by percentage of goal (money) raised
        .limit(12) //limit of components = 5
        .exec((error, data) => { //then execute sending data
            error? res.json("error"):
            data.length === 0? res.json("nodonationstothattype"):
            res.json(data)
        })
    })
}