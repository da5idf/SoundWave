import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as sessionActions from "../../store/session";
import { getUsers } from "../../store/users"
import UserInfo from "./UserInfo"
import Bio from "./Bio";
import ProfileImg from "./ProfileImg";
import SubmitForm from "./SubmitForm"

function SignupFormPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector((state) => state.session.user);
    if (sessionUser) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signupUser({
                email,
                username,
                firstName,
                lastName,
                profileImage,
                password,
            }))
                .then(() => {
                    setUsername("");
                    setFirstName("");
                    setLastName("");
                    setProfileImage(null);
                    setPassword("");
                    setConfirmPassword("");
                })
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        setErrors(data.errors);
                        setStep(1);
                    }
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    switch (step) {
        case 1:
            const userProps = {
                email, setEmail,
                username, setUsername,
                firstName, setFirstName,
                lastName, setLastName,
                password, setPassword,
                confirmPassword, setConfirmPassword,
                step, setStep,
                errors,
            }
            return <UserInfo userProps={userProps} />
        case 2:
            const bioProps = {
                bio, setBio,
                step, setStep,
            }
            return <Bio bioProps={bioProps} />
        case 3:
            const pfpProps = {
                setProfileImage,
                step, setStep,
            }
            return <ProfileImg pfpProps={pfpProps} />
        case 4:
            const submitFormProps = {
                step, setStep,
                handleSubmit,
            }
            return <SubmitForm submitFormProps={submitFormProps} />
        default:
            setStep(1)
    }
}

export default SignupFormPage;