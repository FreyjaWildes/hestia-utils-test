const chai =  require("chai")
const assert =  chai.assert
const chai_http =  require("chai-http")
const server =  require("../index.js")
const fs = require("fs")

chai.use(chai_http)

describe("GET /", () => {
    it("Should return a simple html page", (done) => {
        //err.should.be.null()
        chai.request(server)
            .get("/")
            .end((err, res) => {
                assert.equal(res.status, 200)
                done()
            })
    })
})

describe("POST /csv", () => {
    it("Should post and return the proper CSV file", (done) => {
        fs.readFile("test/sample.csv", (err, file) => {
            assert.isNull(err)
            chai.request(server)
                .post("/csv")
                .set("Content-Type", "text/plain")
                .attach("csv", file, "test.csv")
                .end((err, res) => {
                    assert.isNull(err)
                    fs.readFile("test/output.csv", (err, outfile) => {
                        assert.isNull(err)
                        assert.equal(res.text, outfile.toString())
                        done()
                    })
                })
        })
    })
})
