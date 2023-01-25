const express = require('express');
const fs = require('fs');
const router = express.Router();

/**
 * Current path
**/
const PATH_ROUTES =__dirname; 

/**
 * Function to remove the extension of the file 
 */
const removeExtension = (filename)=>{
    return filename.split('.').shift(); 
};

/**
 * To require the controller by router name (for example if we are in /envelopes the controller to be used will be ./envelopes)
 */
fs.readdirSync(PATH_ROUTES).filter((file) =>{ 
    const name = removeExtension(file);
    if (name !== 'index'){        
        router.use(`/${name}`,require(`./${file}`)); 
    }

}); 

module.exports = router;