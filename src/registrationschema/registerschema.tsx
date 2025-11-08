import { View, Text } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
const Registerschema = Yup.object().shape({
    fullname:Yup.string().required('Enetr full name'),
    phone:Yup.string()
        .matches(/^[0-9]{10}$/,'phone must be 10 digit')
        .required('phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    location: Yup.string().required('Location is required'),

})

export default Registerschema