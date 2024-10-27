import { z } from "zod";

const createUserValidationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email().optional(),
    phoneNo: z.string().min(1, { message: "Phone number is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    profileImg: z.string().min(1, { message: "Profile image is required" }),
    isDeleted: z.boolean().default(false),

});

const updateUserValidationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }).optional(),
    email: z.string().email().optional(),
    phoneNo: z
      .string()
      .min(1, { message: "Phone number is required" })
      .optional(),
    address: z.string().min(1, { message: "Address is required" }).optional(),
    profileImg: z
      .string()
      .min(1, { message: "Profile image is required" })
      .optional(),
});

export const userValidationSchema = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
