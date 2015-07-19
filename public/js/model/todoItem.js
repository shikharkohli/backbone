var Backbone = require('Backbone');

var todoModel = Backbone.extend.model({
	defaults:
	{
		'title' : 'My Task',
		'content' : 'I need to...',
		'date': new Date()
	},
	validate: function(attrib)
	{
		if(attrib.title && attrib.content && attrib.date)
			return true;

		else
			return false;
	}
});