const jwt = require('jsonwebtoken');
const User = require('../models/userschema');

const auth = async (request , response, next) => {
    try {
        const authToken = request.header('Authorization').replace('Bearer ','');
        const decoded = jwt.verify(authToken,process.env.JWT_SECRET);
        const user = await User.findOne({_id: decoded._id, 'tokens.token':authToken});

        if(!user){
            throw new Error();
        }
        request.user = user;
        request.token = authToken;
        next();
    } catch (error) {
        response.status(401).send({error: 'Authentication failed'})
    }
}

module.exports = auth;