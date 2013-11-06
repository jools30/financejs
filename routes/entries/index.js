
// TODO get entries from persistence layer
exports.all = function(req, res){
	var entries = [
	{ 
		name: 'income',
		cost: '3000',
		type: 'credit',
		tag: 'income'
	},
	{ 
		name: 'insurance1',
		cost: '36.12',
		type: 'debit',
		tag: 'insurance'
	},
	{ 
		name: 'rent',
		cost: '850',
		type: 'debit',
		tag: 'appartement'
	},
	{ 
		name: 'insurance2',
		cost: '48.66',
		type: 'debit',
		tag: 'insurance'
	}];

	res.setHeader("Content-Type", "application/json");
	res.send(entries);
	res.end();
};