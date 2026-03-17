const todoModel = require("../models/todoModel");

//create todo
const createTodoController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const createdBy = req.user.userId;
    if (!title || !description) {
      return res.status(500).send({
        success: false,
        message: "Please provide all the required fields",
      });
    }
    const todo = new todoModel({ title, description, createdBy });
    const result = await todo.save();
    res.status(201).send({
      success: true,
      message: "Todo created successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error creating todo api",
      error,
    });
  }
};

//get todo
const getTodoController = async (req, res) => {
  try {
    //get user id
    const { userId } = req.params;
    //validate
    if (!userId) {
      return res.status(404).send({
        success: false,
        message: "User id not found",
      });
    }
    //find tasks of the user
    const todos = await todoModel.find({ createdBy: userId });
    if (!todos) {
      return res.status(404).send({
        success: false,
        message: "No tasks found for the user",
      });
    }
    res.status(200).send({
      success: true,
      message: "Tasks fetched successfully",
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error fetching todo api",
      error,
    });
  }
};

//delete api
const deleteTodoController = async (req, res) => {
  try {
    //get todo id
    const { id } = req.params;
    //validate
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Todo id not found",
      });
    }
    //find and delete todo
    const todo = await todoModel.findByIdAndDelete({ _id: id });
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "Todo not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Todo deleted successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error deleting todo api",
      error,
    });
  }
};

//update api
const updateTodoController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Todo id not found",
      });
    }
    const data = req.body;

    const todo = await todoModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true },
    );

    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Todo updated successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error updating todo api",
      error,
    });
  }
};

module.exports = {
  createTodoController,
  getTodoController,
  deleteTodoController,
  updateTodoController,
};
