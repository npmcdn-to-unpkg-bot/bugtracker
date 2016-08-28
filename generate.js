module.exports = function() {
	var faker = require("faker");
	var _ = require("lodash");
	return {
		project : _.times(5, function(n){
			return {
				id : n,
				name : faker.internet.domainName(),
				summary : faker.lorem.words(),
				active : 'Y',
				creationDate : faker.date.past(),
				asms:faker.random.number(),
				reporter :{
					id : n,
					firstName : faker.name.firstName(),
					lastName : faker.name.lastName()
				},
				handler :{
					id : n,
					firstName : faker.name.firstName(),
					lastName : faker.name.lastName()
				}
			}
		}),
		
		bug : _.times(5, function(n){
			return {
				id : n,
				summary : faker.name.firstName(),
				description : faker.name.lastName(),
				reportedOn : faker.date.past(),
				reportedBy : {
					id : n,
					firstName : faker.name.firstName(),
					lastName : faker.name.lastName()
				},
				assignedTo: {
					id : n,
					firstName : faker.name.firstName(),
					lastName : faker.name.lastName()
				},
				severity : {
					id : n,
					severity : faker.random.arrayElement['Blocker','Critical','High','Normal','Enhancement']
				},
				priority : {
					id : n,
					priority : faker.random.arrayElement['Immediate','High','Low']
				},
				comments :{
					id : n,
					comment : faker.lorem.words(),
					commentedOn : faker.date.past()
				},
				attachments : {
					id : n,
					filePath : faker.system.filePath(),
					fileName : faker.system.fileName(),
					uploadedDate : faker.date.past()
				}
				
			}
		}),
		
		user : _.times(5, function(n){
			return {
				id : n,
				firstName : faker.name.firstName(),
				lastName : faker.name.lastName(),
				active : 'Y',
				creationDate : faker.date.past()
				
			}
		})
	}
}