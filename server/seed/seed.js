const db = require('../config/connection')
const { User } = require('../models');

// const userData = require('./userData')

db.once('open', async () => {
	//delete all existing documents
	await User.deleteMany({})

	//seed User

	//seed paost that are a
})



/**========================================================================
 * ?                              Info
 *   
 * ?  Seed Data: .js or .json 
 * 		
 * 		*JavaScript Files:
 * 				Flexibility: 
 * 						You can use variables, functions, and other 
 * 						programming constructs. This allows you to 
 * 						dynamically generate data or perform some logic 
 * 						before exporting the data.
 *   			Code Sharing: 
 * 						You can reuse constants or functions defined elsewhere 
 * 						in your codebase within your seed file. This can be 
 * 						useful to keep your seed data consistent with the rest 
 * 						of your application logic.
 * 				Complex Data Types: 
 * 						You can include data types not supported by JSON, such 
 * 						as Dates, Regular Expressions, or custom class instances.
 * 				Modularity: 
 * 						You can split your seed data into multiple files and 
 * 						then combine them in various ways using JavaScript's 
 * 						module system.
 * 			The flexibility of JavaScript files can be a double-edged sword, 
 * 			as it may lead to more complex seed files if not managed properly
 * 
 * 		*JSON Files:
 * 				Simplicity: 
 * 						JSON files are data-only and can't contain logic, which 
 * 						makes them simpler to understand and manage. This is 
 * 						particularly useful if non-developers need to modify 
 * 						the seed data.
 * 				Portability: 
 * 						JSON is a standard data interchange format. This means 
 * 						you can easily share your seed data with other systems, 
 * 						regardless of the programming language they use.
 * 				Tooling: 
 * 						There are many tools available that can validate, format, 
 * 						and manipulate JSON data. Some databases also allow you 
 * 						to import data directly from JSON files.
 * 			JSON's simplicity also limits what you can do with it. For 
 * 			instance, you can't have comments, functions, or data types not 
 * 			supported by JSON.	
 *========================================================================**/