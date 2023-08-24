import TextField from '@mui/material/TextField';
import React, { useState } from "react"
import PasswordChecklist from "react-password-checklist"
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';



const SignUp = () => {
	const [password, setPassword] = useState("")


	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handlePasswordChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};




	return (
		<form>



			<TextField
				name={'password'} varient='outlined' label="Password"
				required fullWidth
				type={values.showPassword ? "text" : "password"}
				onChange={handlePasswordChange("password")}
				value={values.password}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
							>
								{values.showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					)
				}}
			/>

			<PasswordChecklist
				rules={["minLength", "specialChar", "number", "capital"]}
				minLength={8}
				value={values.password}
				iconSize={10}
			/>

		</form>
	)
}
export default SignUp