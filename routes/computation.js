const express = require('express');
const router = express.Router();
 
router.get('/', function(req, res) {
 
    var a = Math.random()*10+1;
 
    const acosh = Math.acosh(a);

    const logp = Math.log1p(a);

    const tanf = Math.tan(a);

    var b = Math.random()*10+1;
    var sqrtm =  Math.sqrt(a,b);
    
    res.send(`Math.acosh(a) applied to ${a} is ${acosh}<br>
    Math.log1p(a) applied to ${a} is ${logp}<br>
    Math.tan(a) applied to ${a} is ${tanf}<br>
    Math.sqrt(a,b) applied to ${a} is ${sqrtm}

    `);
 
});

module.exports = router;