const { Schema, SchemaTypes, model } = require('mongoose');

const InfractionSchema = new Schema({
    infID: {
		type: SchemaTypes.Number,
		required: true
	},
	guild: {
		type: SchemaTypes.String,
		required: true
	},
	type: {
		type: SchemaTypes.String,
		required: true
	},
	user: {
		type: SchemaTypes.String,
		required: true
	},
	details: {
		reason: {
			type: SchemaTypes.String,
			required: true
		},
		moderator: {
			type: SchemaTypes.String,
			required: true
		},
		duration: {
			type: SchemaTypes.String,
			required: false
		}
	}
});

module.exports = new model('infractions', InfractionSchema);