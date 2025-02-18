import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
// type registerFormSchema = {
//   username: string
//   password: string
// }

const RegisterFromValidation = z.object({
  username: z.string().min(5, { message: "Minimal 5 karakter" }).max(20, { message: "Maksimal 20 karakter" }),
  password: z.string().min(8, { message: " Minimal 8 karakter" }).max(20, { message: "Maksimal 20 karakter" }),
  age: z.coerce.number().min(18)
})

type registerFormSchema = z.infer<typeof RegisterFromValidation>

const RHFPage = () => {

  const form = useForm<registerFormSchema>({
    resolver: zodResolver(RegisterFromValidation)
  });

  const handleRegisterUser = (data: registerFormSchema) => {
    alert("forms Submited");
    console.log(data)
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleRegisterUser)}
      style={{
        gap: "8px",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <h1> RHF PAGE</h1>
      <div>React Hook Form</div>

      <label>
        Username :
        <input type="text" {...form.register("username")} />
      </label>
      <span style={{ color: "red" }}>{form.formState.errors.username?.message}</span>

      <label>
        Password :
        <input type="password" {...form.register("password")} />
      </label>
      <span style={{ color: "red" }}>{form.formState.errors.password?.message}</span>

      <label>
        age :
        <input type="text" {...form.register("age")} />
      </label>
      <span style={{ color: "red" }}>{form.formState.errors.age?.message}</span>

      <button style={{ width: "fit-content" }}>Submit</button>
    </form>
  );
};
export default RHFPage;
