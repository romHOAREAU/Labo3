var db = require('../databases/db.js')

// Display list of all Task
exports.task_list = function(req, res, next) {

    const query = {
        // give the query a unique name
        name: 'fetch-all-task',
        text: 'SELECT * FROM task',
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('task', { listeTasks : result });
        }
    });

};

// Display detail page for a specific Task
exports.task_detail = function(req, res, next) {

    const query = {
        // give the query a unique name
        name: 'fetch-task',
        text: 'SELECT * FROM task WHERE id = $1',
        values: [req.params.id]
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');

        } else {
            console.log(result.rows[0]['libelle']);
            res.send('Task detail: ' + req.params.id + ' Libelle : '+ result.rows[0]['libelle']);

        }
    });
};

// Handle Task create on POST
exports.task_ajout_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Task create POST');
};