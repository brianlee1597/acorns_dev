import donation from './components/donations.js'
import allGifts from './components/gifts.js'
import { chartData } from './tempdb.js'

export default function (app) {

    app.get('/api/chartdata', (req, res) => {
        res.send(chartData)
    })
    
    app.get('/api/getuser', (req, res) => { //sends userstatus to react on api call
        req.user === undefined? res.json("nouser"): res.send(req.user)
    })
    
    app.get("/api/getallartistsin/gifts", (req, res) => {
        allGifts.distinct("artist").lean()
        .sort().exec((error, data) => {
            error? res.json('error'):
            data.length === 0? res.json("nogifts"):
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
    
    app.get('/api/allgiftsbygoal', (req, res) => {
        allGifts.find({}).lean()
        .sort({paidtoneededratio: -1})
        .limit(10).then(gifts => res.json(gifts))
        .catch(error => console.log(error))
    })
    
    app.get('/api/allgiftsbydeadline', (req, res) => {
        allGifts.find({}).lean()
        .sort({dateending: 1})
        .limit(10).then(gifts => res.json(gifts))
        .catch(error => console.log(error))
    })
    
    app.get('/api/allgiftsbyfunding', (req, res) => {
        allGifts.find({}).lean()
        .sort({amountpaid: 1})
        .limit(10).then(gifts => res.json(gifts))
        .catch(error => console.log(error))
    })
    
    app.post("/api/getgiftsby/bias", (req, res) => { //Gifts Section get by bias
        allGifts.find({artist: req.body.artist}) //search and find only the ones by user bias
        .lean() //get only the data not the mongoDB settings
        .sort({paidtoneededratio: -1}) //sort by percentage of goal (money) raised
        .limit(5) //limit of components = 5
        .exec((error, data) => { //then execute sending data
            error? res.json("error"):
            data.length === 0? res.json("nogiftstothatartist"):
            res.json(data)
        })
    })
    
    app.post("/api/getgiftsby/artist", (req, res) => { //Gifts Section get by bias
        allGifts.find({artist: req.body.artist}) //search and find only the ones by user bias
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
        
    app.get('/api/getalldonations', (req, res) => { //sends all donations on api call
        donation.find({})
        .then(donation => res.json(donation))
        .catch(error => console.log(error))
    })

    app.get("/api/getallartistsin/donations", (req, res) => {
        allGifts.distinct("artist").lean()
        .sort().exec((error, data) => {
            error? res.json('error'):
            data.length === 0? res.json("nodonations"):
            res.json(data)
        })
    })
}