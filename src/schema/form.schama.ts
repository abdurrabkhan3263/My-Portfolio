import zod from "zod";

export const formSchema = zod.object({
  name: zod
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .max(50)
    .min(1, { message: "Name must be required" }),
  email: zod
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email must be required" })
    .email({ message: "Invalid email address" }),
  message: zod
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message must be more than 10 characters",
    })
    .max(500)
    .min(10, { message: "Message must be more than 10 characters" }),
});
