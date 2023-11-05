# In this application (it is part of Rocketseat's Ignite Nodejs track) we created a transaction back-end in NodeJs in which the user can create transactions and view their transactions 🚀🚀

### Below are some functional requirements and business rules for the application:

➡️ functional requirements:
- user must be able to create a new transaction
- user must be able to get an account summary
- the user must be able to list all transactions that have already occurred
- user must be able to view a single transaction

➡️ business rules:
- the transaction can be of the credit type that will add to the total amount, or debit that will subtract
- when the user makes requests, it must be possible to identify the user among the requests
- if user tries to list transactions, user can only view transactions he created

### Some libs used in the application:

- sqlite3 -> relational database → easy to migrate to another database if necessary
- fastify/cookie -> we will use cookie to identify the user who is creating a transaction
- dotenv -> let's use dotenv to read the .env file inside NodeJs
- fastify -> similar to express → brings traditional part used in building an API (dealing with routes, parameters, headers, responses in JSON, understands requests in JSON)
- knex -> a query builder in which we don't need to focus too much on learning SQL and we can focus on the applied language -> it is a query builder, making it easier to write queries with JS code
- zod -> to validate data such as application environment variables, data sent as parameters in routes

### If you want to test the application on your machine, download the repository and run the 'npm run dev' command in the repository terminal, you can use insomnia to test the application routes 🚀
