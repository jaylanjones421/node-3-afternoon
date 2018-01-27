module.exports = function(req,res, next){
    return (!req.session.user ? {
        username: '', cart: [], total: 0
    }  : next());
}