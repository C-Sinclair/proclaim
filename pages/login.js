import Router from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { supabase } from "../util/supabase";
import { yupResolver } from "../util/yup";
import { TextInput } from "../components/form/TextInput/TextInput";
import Main from "../components/layout/Main/Main";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.auth.signIn(data);
      if (error) {
        throw error;
      }
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main hideFooter>
      <h1>Login time</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="email"
          title="Email"
          ref={register}
          error={errors.email}
        />
        <TextInput
          name="password"
          title="Password"
          ref={register}
          error={errors.password}
        />
        <button type="submit">Log in</button>
      </form>
    </Main>
  );
}
