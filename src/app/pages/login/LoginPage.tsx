import { useForm, SubmitHandler } from "react-hook-form";
import {
    Grid,
    Typography,
    Button,
    Container,
    Box,
    Link,
} from "@mui/material";
import { UserInput } from '../../types/types';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from '../../../assets/images/Symbol.svg';
import imac_dig_twins from '../../../assets/images/imac_dig_twins.jpg';
import Styled from './login.styles';
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../store/auth/api";
import { AppDispatch } from "../../store";
import { selectError, selectUser } from "../../store/auth/selectors"
import { useNavigate } from 'react-router-dom'; import { useEffect } from "react";
;

const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email address"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
});

const LoginPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<UserInput>({
        resolver: yupResolver(validationSchema) as any,
    });
    const dispatch = useDispatch<AppDispatch>();
    const error = useSelector(selectError);
    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user])

    const onSubmit: SubmitHandler<UserInput> = (data) => {
        try {
            dispatch(postData(data));
        } catch (error) {
            console.error("An error occurred:", error);
        }

    };

    return (
        <Container maxWidth={false} sx={{ backgroundColor: "white" }}>
            <Grid container
                justifyContent="space-between"
                alignItems="center"
                minHeight="100vh">
                <Grid item xs={12} md={5}>
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12} md={12}>
                            <Styled.Logo component="img" alt="Logo" image={logo} sx={{ my: 2 }} />
                            <Typography component="h1" variant="h5" sx={{ my: 3, fontSize: 56, fontWeight: 300 }}>
                                Welcome to the <br />Product Security Platform
                            </Typography>
                            <Grid container>
                                <Grid item xs={12} md={7}>
                                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                                        <Input name="email" label="Usernames" control={control} errors={errors} error={error} />
                                        <Input name="password" label="Password" control={control} errors={errors} error={error} />
                                        <Link href="/forgot-password" variant="body2" sx={{ size: 14, textDecoration: "none", color: "#4D4D4D" }}>
                                            Forgot your Password?
                                        </Link>
                                        <Button
                                            type="submit"
                                            variant="outlined"
                                            fullWidth
                                            size="large"
                                            sx={{ mt: 5, backgroundColor: "#BAA182", color: "#2A2118", size: 16 }}
                                        >
                                            Log in
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                        <Styled.CardMedia component="img" alt="Logo" image={imac_dig_twins} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;
