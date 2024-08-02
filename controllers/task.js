import TaskModel from "../models/task.js";

const login = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create the task using a single object
    const task = await TaskModel.create({
      title,
      description,
      user:req.user,
    });

    res.status(201).json({
      success: true,
      message:"task added succesfulluy",
      task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const userall = async(req,res,next)=>{
  try{
  const userid = req.user._id;
  const taskall = await TaskModel.find({user:userid});
  res.status(200).json({
    sucess:true,
    message:"get all user id",
    taskall
  });
  }catch (error){
    res.status(500).json({
      sucess:false,
      message:"error found"
    });
  }


};


const taskupdate = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the task",
      error: error.message,
    });
  }
};


const taskdelete = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting the task",
      error: error.message,
    });
  }
};



export { login,userall,taskdelete,taskupdate };
