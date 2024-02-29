import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'
// EXPRESS APP
const app = express()
// ROUTER
const router = express.Router()
// PORT
const port = +process.env.PORT || 4000
// JSON URL
const dataURL = 'https://gcusaaa.github.io/todayPortfolioData/data/'
// APPLICATION MIDDLEWARE
app.use(
    // WE ARE TELLING THE SERVER TO SUPPORT JSON
    express.json(), 
    // ITS A MIDDLEWARE THAT HELPS US TO PASS ANY DATA THROUGH THE URL
    express.urlencoded({ 
        extended: true 
    }),
    cors(),
    router
)
// / => HOME
router.get('^/$|/ejd', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: 'You\'re home'
    })
    next()
})
router.get('/education/:id', async (req, res) => {
    // let {education} = await (await fetch(dataURL)).json({
    //     status: res.statusCode,
    //     education
    // })
    try {
        let response = await axios.get(dataURL)
        let {education} = await response.data
        let params = +req.params.id
        let idx = params > 0 ? params - 1 : 0
        res.json({
            status: res.statusCode,
            education: education[idx] 
        })
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: 'Please ty again later.'
        })
    }
    
})

bodyParser.json(), async (req, res) => {
    try {
        let dateRes = await
        axios.post(dataURL, req.body)
        if(dateRes)
        console.log(resVal.data);
        res.json({
            res.statusCode,
            msg: 'New '
        })
    } catch (e) {
        
    }
}

router.patch('./updateEducation/:id', bodyParser.json(), (req, res) => {
    // axios.patch(`${dataURL}`,)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

