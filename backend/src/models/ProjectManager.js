const AbstractManager = require("./AbstractManager");

class ProjectController extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectController.table} (title, description, sector, github_address, progress, debut_date, estimated_deadline) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        project.title,
        project.description,
        project.sector,
        project.github_address,
        project.progress,
        project.debut_date,
        project.estimated_deadline,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectController.table} set ? where id = ?`,
      [project, project.id]
    );
  }
}

module.exports = ProjectController;
