import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";

// Create Router
const router = createBrowserRouter([...privateRouter, ...publicRouter]);

// Export default router
export default router;
