const accessControl = (req, res, next) => {
    console.log("Middleware: Access Control");
    const access = true;
    
    if(!access){
        res.status(401).json({
            success: false,
            message: "You are not authorized"
        });
    }

    next();

}

module.exports = {
    accessControl
}