
import Dashboard from "@/contexts/dashboard/dashboard";

import { Route, Routes } from "react-router-dom";

import TaskList from '@/contexts/task_list/task_list';
const Content = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/task" element={<TaskList />} />
    
  </Routes>

);
export default Content;

