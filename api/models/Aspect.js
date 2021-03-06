/*---------------------
	:: Aspect
	-> model
---------------------*/
module.exports = {

	attributes	: {

		// Simple attribute:
		// name: 'STRING',

		// Or for more flexibility:
		// phoneNumber: {
		//	type: 'STRING',
		//	defaultValue: '555-555-5555'
		// }
		
		name: {
			type: 'STRING'
		},

		clues: {
			type: 'ARRAY'
		},

		sources: {
			type: 'ARRAY'
		}
	}

};