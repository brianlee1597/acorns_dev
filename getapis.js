import Donations from './components/donations.js'
import allGifts from './components/gifts.js'
import { chartData } from './tempdb.js'

export default function (app) {

    app.get('/api/chartdata', (req, res) => {
        res.send(chartData)
    })
    
    app.get('/api/getloginstatus', (req, res) => { //sends userstatus to react on api call
        req.user === undefined? res.json("nologin"): res.send(loggedInUser)
    })

    app.get('/api/getcomponents', (req, res) => {
        const collection = req.query.collection === "gifts"? allGifts: Donations
        const category   = req.query.category.toString()
        const specific   = req.query.specificcategory.toString()
        const sortby     = req.query.sortby.toString()
        const gridview   = req.query.gridview.toString()

        if(gridview === "four") {
            collection.distinct(category).lean()
            .then(data => res.json(data))
            .catch(error => console.log(error))
        }
        else {
            collection.find(
                category === 'artist'? 
                {artist: specific}:
                {type:   specific} 
            ).lean().sort(    
                sortby === 'goal'? 
                {paidtoneededratio: -1}:     
                sortby === 'deadline'? 
                {dateending: 1}:    
                {amountpaidsofar: -1}
            )
            .limit(12).then(data => res.json(data))
            .catch(error => console.log(error))
        }
    })

    
    app.post("/api/getbiased", (req, res) => { //get pinnable data from gifts or donations 
        const collection = req.query.collection === 'gifts'? allGifts: Donations
        collection.find({artist: req.body.artist}) //search and find only the ones by user bias
        .lean() //get only the data not the mongoDB settings
        .sort({dateending: 1}) //sort by percentage of goal (money) raised
        .limit(5) //limit of components = 5
        .exec((error, data) => { //then execute sending data
            error? res.json("error"):
            data.length === 0? res.json("nobiaseddata"):
            res.json(data)
        })
    })
}