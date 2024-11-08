'use client'
import { TextField } from "@mui/material"

interface formInputProps {
    name: string
    label: string | JSX.Element
    type: string
    placeholder: string
    required?: boolean
    value?: string
    labelColor?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const FormInput = ({ name, label, type, placeholder, required = true, onChange, value, labelColor }: formInputProps) => {
    return (
        <TextField
            name={name}
            label={label}
            type={type}
            value={value}
            required={required}
            placeholder={placeholder}
            variant="outlined"
            onChange={onChange}

            sx={{
                width: "100%",
                height: "52px",
                "& .MuiOutlinedInput-root": {
                    height: "52px",
                    borderRadius: "8px",
                    "& fieldset": {
                        "& legend": {
                            "& span": {
                                border: "5px solid transparent!important",
                            },
                        },
                    },
                },

                borderRadius: "8px",
                label: {
                    backgroundColor: "#fff",
                    fontSize: "14px",
                    color: labelColor,
                },
            }}
        />
    );
}