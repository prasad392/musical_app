
import * as Yup from 'yup';

const passwordvalidationschema = Yup.object().shape({
    newPassword: Yup.string()
        .min(8,'Password must be 8 characters')
        .required("New password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), undefined],"password must match")
        .required('Confirm password is required')
})

export default passwordvalidationschema;