import { Controller, FieldErrors, Control } from "react-hook-form";
import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { UserInput } from "../types/types";


type InputType = {
    name: "email" | "password";
    label: string;
    errors: FieldErrors<UserInput>;
    control: Control<UserInput, any>;
    error: string | null;
}


const Input = ({ name, label, errors, control, error }: InputType) => {
    const isError = !!error || !!errors[name];
    const errorMessage = error || errors[name]?.message;

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    autoComplete="off"
                    type={name}
                    label={label}
                    variant="standard"
                    fullWidth
                    margin="normal"
                    error={isError}
                    helperText={errorMessage}
                    InputLabelProps={{
                        sx: {
                            px: 2, size: 14, color: "#4D4D4D"
                        }
                    }}
                    InputProps={{
                        style: isError ? {
                            border: '1px solid #BA1A1A', height: "40px", borderRadius: 4, backgroundColor: "#FFF", paddingLeft: 12
                        } : {
                            border: '1px solid #4D4D4D', height: "40px", borderRadius: 4, backgroundColor: "#FFF", paddingLeft: 12
                        },
                        endAdornment: isError ? (
                            <InputAdornment position="start">
                                <ErrorOutlineIcon color='error' />
                            </InputAdornment>
                        ) : null,
                    }}
                    sx={{
                        backgroundColor: "#FFF",
                        "& .MuiInputBase-root::before": {
                            border: "none"
                        }
                    }}
                />
            )}
        />
    )
}
export default Input;