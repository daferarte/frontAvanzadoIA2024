import React from "react";
import { useForm } from "react-hook-form";


let Add = (props) => {
    const {register, handleSubmit} = useForm();
    let onSubmit = (data) => {
        console.log(data.email);
    };
    return (
        <div>
            {
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" name="email" {...register("email")} placeholder="Correo electronico"/>
                    <input type="password" name="password" {...register("password")} placeholder="Contrasenia"/>
                    <input type="submit" value="Enviar" />
                </form>
            }
        </div>
    )
};

export default Add;