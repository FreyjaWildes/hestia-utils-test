const express = require('express')
const path = require('path')
const busboy = require('connect-busboy')
const spawn = require('child_process').spawn
const app = express()
const router = express.Router()
const fs = require("fs-extra")


app.use(busboy())
app.use('/', router)

/**
 * Endpoint for uploading a csv file
 */
router.post('/csv',(req,res) => {
    // Pass the req to busboy middleware
    req.pipe(req.busboy)
    req.busboy.on('file', function (fieldname, file, filename) {
        // Invoke the python command
        var subprocess = spawn('python3', [path.join(__dirname, "/hestia-utils.py")])

        // Gradually build the response string
        var result_string = ""
        subprocess.stdout.on('data', function(chunk) {
            result_string += chunk
        })
        
        // Write the received file directly to the standard input of the subprocess
        file.pipe(subprocess.stdin)

        subprocess.on('close', function(exit_code) {
            res.send(result_string)
        })
    })
})

/**
 * Index route, return a simple index page with a form for upload
 */
router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(8080)
