# MongoDB Overview

## What is MongoDB?

MongoDB is a popular open-source NoSQL database designed for high performance, high availability, and easy scalability. Unlike traditional relational databases, MongoDB stores data in flexible, JSON-like documents, allowing for dynamic schemas and hierarchical data structures.

## Why Do We Need MongoDB?

- **Scalability:** MongoDB is built to scale out horizontally, making it suitable for handling large volumes of data and high-throughput applications.
- **Flexibility:** Its schema-less nature allows developers to store different types of data in the same collection, making it ideal for rapidly changing application requirements.
- **Performance:** MongoDB provides fast read and write operations due to its document-oriented storage model.
- **High Availability:** Features like replication and automatic failover ensure data is always accessible.
- **Big Data & Real-Time Analytics:** MongoDB is well-suited for big data applications and real-time analytics due to its ability to handle large, unstructured datasets.

## Difference Between NoSQL and SQL Databases

| Feature                | SQL Databases (Relational)         | NoSQL Databases (e.g., MongoDB)         |
|------------------------|-------------------------------------|-----------------------------------------|
| **Data Model**         | Tables with rows and columns        | Collections with documents (JSON/BSON)  |
| **Schema**             | Fixed, predefined schema            | Dynamic, flexible schema                |
| **Scalability**        | Vertical (scale-up)                 | Horizontal (scale-out)                  |
| **Transactions**       | ACID-compliant                      | BASE (eventual consistency)             |
| **Joins**              | Supports complex joins              | Limited or no joins                     |
| **Best Use Cases**     | Structured data, complex queries    | Unstructured/semi-structured data, big data, real-time apps |
| **Examples**           | MySQL, PostgreSQL, Oracle           | MongoDB, Cassandra, Couchbase           |

**Summary:**  
SQL databases are ideal for structured data and complex queries, while NoSQL databases like MongoDB are better suited for applications requiring scalability, flexibility, and handling of unstructured or rapidly changing data.

## What is a Document and a Collection in MongoDB?

- **Document:**  
  A document is the basic unit of data in MongoDB, similar to a row in a relational database. Documents are stored in JSON-like format (BSON), allowing them to store complex, hierarchical data structures. Example:
  ```json
  {
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com",
    "address": {
      "city": "New York",
      "zip": "10001"
    }
  }
  ```

- **Collection:**  
  A collection is a group of MongoDB documents, similar to a table in relational databases. Collections do not enforce a schema, so documents within a collection can have different fields and structures.

## Creating a Database and Collection in MongoDB

### 1. Start the MongoDB Shell

Open your terminal and run:
```
mongo
```

### 2. Create or Switch to a Database

To create a new database (or switch to it if it already exists):
```
use myDatabase
```
This command switches to `myDatabase`. If it doesn't exist, MongoDB will create it when you first store data.

### 3. Create a Collection

Collections are created automatically when you insert the first document. You can also create one explicitly:
```
db.createCollection("myCollection")
```

### 4. Insert a Document into a Collection

To insert a document:
```
db.myCollection.insertOne({ name: "Alice", age: 30 })
```

### 5. Show Databases and Collections

- List all databases:
  ```
  show dbs
  ```
- List all collections in the current database:
  ```
  show collections
  ```

### 6. Drop (Delete) a Collection or Database

- Drop a collection:
  ```
  db.myCollection.drop()
  ```
- Drop the current database:
  ```
  db.dropDatabase()
  ```

**Note:**  
MongoDB commands can be run in the MongoDB shell (`mongo`) or in a MongoDB client like Compass or via drivers in your application code.
