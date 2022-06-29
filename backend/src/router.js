const express = require("express");

const {
  AgencyController,
  CollaboratorController,
  ProjectController,
  UserController,
  TaskController,
} = require("./controllers");

const router = express.Router();

router.get("/projects", ProjectController.browse);
router.get("/projects/:id", ProjectController.read);
router.put("/projects/:id", ProjectController.edit);
router.post("/projects", ProjectController.add);
router.delete("/projects/:id", ProjectController.delete);

router.get("/users", UserController.browse);
router.get("/users/:id", UserController.read);
router.put("/users/:id", UserController.edit);
router.post("/users", UserController.add);
router.delete("/users/:id", UserController.delete);

router.get("/agencies", AgencyController.browse);
router.get("/agencies/:id", AgencyController.read);
router.put("/agencies/:id", AgencyController.edit);
router.post("/agencies", AgencyController.add);
router.delete("/agencies/:id", AgencyController.delete);

router.get("/collaborators", CollaboratorController.browse);
router.get("/collaborators/:id", CollaboratorController.read);
router.put("/collaborators/:id", CollaboratorController.edit);
router.post("/collaborators", CollaboratorController.add);
router.delete("/collaborators/:id", CollaboratorController.delete);

router.get("/tasks", TaskController.browse);
router.get("/tasks/:id", TaskController.read);
router.put("/tasks/:id", TaskController.edit);
router.post("/tasks", TaskController.add);
router.delete("/tasks/:id", TaskController.delete);

module.exports = router;
