import React from "react";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "react-native-paper";

const LoginLink = styled.Text`
color: ${colors.blue};
font-weight: 600;
margin-top: 20px;
`;

const InputStyle = styled.TextInput`
    background-color: #ffffff;
    width: 100%;
    height: 35px;
    margin-bottom: 15px;
`;

export default function CreateAccount() {
    const goToLogin = () => navigation.navigate("Login");
    return (
        <AuthLayout>
        <InputStyle
            placeholder="Id"
            placeholderTextColor="gray"
            returnKeyType="next"
        />
        <InputStyle
            placeholder="Name"
            placeholderTextColor="gray"
            returnKeyType="next"
        />
        <InputStyle
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            returnKeyType="next"
        />
        <InputStyle
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            returnKeyType="next"
        />
        <InputStyle
            placeholder="Password Check"
            placeholderTextColor="gray"
            secureTextEntry
            returnKeyType="join"
        />
        <AuthButton 
            onPress={() => {}}
            disabled={true}
            text="Sign Up"
        />
    {/* <TouchableOpacity onPress={goToLogin}><LoginLink>Log In</LoginLink></TouchableOpacity> */}
    </AuthLayout>
    )
}