import { View, Text } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
const Loginschema = Yup.object().shape({
    email:Yup.string()
    .email('Invalid Email')
    .required('Email is required'),
    password:Yup.string()
    .min(6,'password must be 6 characters')
    .required('password is required')
});

export default Loginschema