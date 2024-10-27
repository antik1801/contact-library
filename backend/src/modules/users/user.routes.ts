import { Router } from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidationSchema } from "./user.validation";


const router = Router();

router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);
router.post("/create-user", validateRequest(userValidationSchema.createUserValidationSchema), userController.createUser)
router.put("/:userId", validateRequest(userValidationSchema.updateUserValidationSchema), userController.updateUser)
router.delete("/:userId", userController.deleteUser)



export const userRoutes = router;