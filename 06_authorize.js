const authorize = (req, res, next) => {
    const {name} = req.query
    if (name === "hawt") {
        req.name = { uName: "hawt", id: 3 }   
        next()
    }
    else {
        res.status(401).send(`Unauthorize`)
    }
}
module.exports = authorize