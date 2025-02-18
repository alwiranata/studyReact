import { useForm } from "react-hook-form";

type registerFormSchema = {
    username : string
    password : string
}

const RHFPage = () => {
    
  const form = useForm<registerFormSchema>();

  const handleRegisterUser = (data : registerFormSchema) => {

    alert("forms Submited" );
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

      <label>
        Password :
        <input type="password" {...form.register("password")} />
      </label>
      <button style={{width : "fit-content"}}>Submit</button>
    </form>
  );
};
export default RHFPage;
