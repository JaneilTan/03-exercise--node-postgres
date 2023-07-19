const pool = require("./db");

module.exports = {
  createNewTodo: async (description) => {
    try {
      // TODO: create a todo
      const newTodo = await pool.query(`INSERT INTO todo (description) VALUES ($1) RETURNING *`, [description]);
      return(newTodo.rows[0]);
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
      throw error;
    }
  },
  getTodoById: async (id) => {
    try {
      // TODO: get a todo by id
      const todo = await pool.query(`SELECT 
      todo_id AS id, description FROM todo WHERE todo_id = $1`, [id]);
      return todo.rows[0];
    } catch (error) {
      throw new Error(error);
    }
  },
  updateTodoById: async (id, description) => {
    try {
      // TODO: update a todo by id
      const updatedTodo = await pool.query(`UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *`, [description, id]);
      return updatedTodo.rows[0];
    } catch (error) {
      throw Error(error);
    }
  },
  deleteTodoById: async (id) => {
    try {
      // TODO: delete a todo by id
      const result = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
      const numberOfDeletedTodos = result.rowCount;

      return numberOfDeletedTodos;
    } catch (error) {
      throw new Error(error);
    }
  },
};
