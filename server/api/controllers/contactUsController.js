const queriesModel = require('../models/contactUsModel');
const { downloadCsv } = require('../../utility/JsonToCsv');







// param - [ name - string , email - string ,message - string]
//Method - POST
//Description - Add contact us messages into db collection.
exports.addMessage = (req,res) => {
    console.log(req.body)
    let data = new queriesModel(
        {
            fname: req.body.fname,
            email:req.body.email,
            message:req.body.message,
        }    
    );
    data.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.send({
            message:'hello'
        })
    })
}


//method - GET
//param - {}
//Description - get all the contatc us messages in csv file.
exports.getAllMessages = (req,res) => {
    const fields = [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Email',
          value: 'email'
        },
        {
         label: 'Message',
          value: 'message'
        }
      ];
    queriesModel.find({}, function (err, messages) {
        if (err) return console.log(err);
        res.send(messages)
        // downloadCsv(res, 'users.csv', fields, messages);
    });

}


