// ************ TASK DESCRIPTION ************
//? Dependency Injection

/*
*   Implement a class `UserService` that:
*   - Takes a `database` as a constructor parameter
*   - Has a method `getUser(id)` that:
*     - Calls `database.query("SELECT * FROM users WHERE id = " + id)`
*     - Returns the result
*
*   Example mock database:
*   const mockDb = {
*     query: (sql) => "Mocked: " + sql
*   }
*
*? Example:
*? const s = new UserService(mockDb);
*? s.getUser(1); → "Mocked: SELECT * FROM users WHERE id = 1"
*/

// TODO: Implement UserService

class UserService {
    constructor(database) {
        this.database = database;
    }

    getUser(id) {
        return database.query("SELECT * FROM users WHERE id = " + id);
    }
}

const mockDb = {
    query: (sql) => "Mocked: " + sql
};

