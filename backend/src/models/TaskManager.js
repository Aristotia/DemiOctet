const AbstractManager = require("./AbstractManager");

class TaskManager extends AbstractManager {
  static table = "task";

  insert(task) {
    return this.connection.query(
      `insert into ${TaskManager.table} (name, description, project_id) values (? , ? , ?)`,
      [task.name, task.description, task.project_id]
    );
  }

  update(task) {
    return this.connection.query(
      `update ${TaskManager.table} set ? where id = ?`,
      [task, task.id]
    );
  }
}

module.exports = TaskManager;