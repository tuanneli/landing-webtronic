import React, {useState} from 'react';
import styles from "./ContactUs.module.scss";
import {useForm} from "react-hook-form";
import {IFormData} from "./ContactUs.types";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Error from "../../error/Error";
import axios from "axios";

const SubmitForm = () => {

    const schema = yup.object({
        name: yup.string().required(),
        phone: yup.number().positive().integer().required(),
        email: yup.string().email().required()
    }).required();

    const {
        register,
        handleSubmit,
        formState: {errors},
        resetField
    } = useForm<IFormData>({resolver: yupResolver(schema)});
    const [done, setDone] = useState("");

    const onSubmit = ({name, phone, email}: IFormData) => {
        axios.post('http://localhost:3004/feedback', {
            name,
            phone,
            email
        }).then(() => setDone("Your form has been sent successfully!"));
        setTimeout(() => {
            setDone("");
        }, 3000);
        resetField("name");
        resetField("phone");
        resetField("email");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label style={{position: "absolute"}} htmlFor="name"></label>
                <input {...register("name", {required: true})}
                       name={'name'}
                       placeholder={'Name'}
                       type="text"/>
                {errors.name && <Error message={errors.name?.message}/>}
            </div>

            <div>
                <label style={{position: "absolute"}} htmlFor="phone"></label>
                <input {...register('phone', {required: true})} name={"phone"} placeholder={'Phone'} type="text"/>
                {errors.phone && <Error message={errors.phone?.message}/>}
            </div>

            <div>
                <label style={{position: "absolute"}} htmlFor="email"></label>
                <input {...register('email', {required: true})} name={"email"} placeholder={'E-mail'} type="text"/>
                {errors.email && <Error message={errors.email?.message}/>}
            </div>
            {done && <div style={{color: "green"}}>{done}</div>}
            <button type={"submit"}>Send</button>
        </form>
    );
};

export default SubmitForm;