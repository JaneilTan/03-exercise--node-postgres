const pool = require("./db");

module.exports = {
  createNewTodo: async (description) => {
    try {
      // TODO: create a todo
    } catch (error) {
      throw Error(error);
    }
  },
  getAllTodos: async () => {
    try {
      const result = await pool.query(
        `SELECT 
          todo_id AS id,
          description
        FROM todo`
      );
      return result.rows;
    } catch (error) {
      throw Error(error);
    }
  },
  getTodoById: async (id) => {
    try {
      // TODO: get a todo by id
    } catch (error) {
      throw Error(error);
    }
  },
  updateTodoById: async (id, description) => {
    try {
      // TODO: update a todo by id
    } catch (error) {
      throw Error(error);
    }
  },
  deleteTodoById: async (id) => {
    try {
      // TODO: delete a todo by id
    } catch (error) {
      throw Error(error);
    }
  },
};
