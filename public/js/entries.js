// handle all entry actions
var ctx = document,
	table = $('table.entries');

ctx.Entries = function() {
};

ctx.Entries.prototype.get = function() {
	return $.ajax({ 
		type: 'GET',
    	url: '/entries',
    	data: '',
    	dataType: 'json',
	});
};

$( document ).ready(function() {
	// get promise for ajax call to make sure data is available
	var promiseGet = ctx.Entries.prototype.get();

	// and return the data if ajax call was successful
	promiseGet.success(function (data) {
		// clear entries
		table.html('');

		// display entries
		var totalSum = 0;
		$.each(data, function( index, entry ) {
			var cost = (entry.type == 'debit') ? +(entry.cost * -1) : +entry.cost;
			totalSum += cost;
			table.append('<tr><td>' + entry.name + ' ( ' + entry.tag + ', ' + entry.type + ' )</td><td>' + cost + ' EUR</td></tr>');
		});

		console.log("Total sum: " + totalSum);
	});

});