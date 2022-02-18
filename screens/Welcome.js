import React from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";


const LoginLink = styled.Text`
color: ${colors.blue};
font-weight: 600;
margin-top: 20px;
`;

export default function Welcome({ navigation }) {
    const goToCreateAccount = () => navigation.navigate("CreateAccount");
    const goToLogin = () => navigation.navigate("Login");

    return (
            <AuthLayout>
                <AuthButton 
                    onPress={goToCreateAccount}
                    disabled={false}
                    text="Create Account"
                />
            <TouchableOpacity onPress={goToLogin}><LoginLink>Log In</LoginLink></TouchableOpacity>
            </AuthLayout>
    )
}