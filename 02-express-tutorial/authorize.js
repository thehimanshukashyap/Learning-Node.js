const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'admin') {
        req.user = {name: 'admin', role: 'admin'};
        console.log(req.user);
        
    }else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authorize;