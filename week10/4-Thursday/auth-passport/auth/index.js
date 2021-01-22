let authReq = (req, res, next) => {

    //isAuthenticated()  from passport

    if (req.isAuthenticated()){
        next()
    }
    else{
        res.redirect('/error');
    }
};

module.exports = authReq;