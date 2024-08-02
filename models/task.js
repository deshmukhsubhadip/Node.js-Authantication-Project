import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: { // Renamed from 'iscompleted' to 'isCompleted' for camelCase consistency
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Corrected typo
    ref: "User", // Ensure this matches the collection name used in your User model
    required: true,
  },
  createDate: { // Renamed from 'createdate' to 'createDate' for camelCase consistency
    type: Date,
    default: Date.now,
  },
});

// Export the Task model
  const TaskModel = mongoose.model("Task", taskSchema);
  export default TaskModel;
 
