import React from "react";

import TextField from '@mui/material/TextField';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Switch } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import {Controller} from '@mui/material';



import { KeyboardTimePicker } from '@material-ui/pickers';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core';
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

  const Signin = () => {
    useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {},
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
      })
    const classes = useStyles();
    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    const useStyles = makeStyles({root: {background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',border: 0,borderRadius: 3,boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',color: 'white',height: 48,padding: '0 30px',},});
      

    return (
        <>
        <div className="box">
            <div className="box-primary">
                <img src="/public/bg.svg" height="300px" alt="" />
            </div>
            <div className="box-secondary">
                <form onSubmit={handleSubmit(onSubmit)}>
                {/* 1) TextField */}
                <TextField
                    placeholder="Enter Your First Name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                    name="firstName"
                    inputRef={register({
                    required: "First Name is required.",
                    })}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                />

                {/* 2) TextField */}
                <TextField
                    placeholder="Enter Your Last Name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                    name="lastName"
                    inputRef={register({
                    required: "Last Name is required.",
                    })}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                />

                {/* 3) TextField */}
                <TextField
                    placeholder="Enter Your E-mail Address"
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                    name="email"
                    inputRef={register({
                    required: "E-mail Address is required.",
                    })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                />

                {/* 4) TextField */}
                <TextField
                    placeholder="Enter Your Phone Number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    className={classes.inputField}
                    name="phone"
                    inputRef={register({
                    required: "Phone Number is required.",
                    })}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone?.message}
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {/* 5) Date Picker */}
                    <Controller
                    render={(props) => (
                        <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        label="Date of Admission"
                        value={props.value}
                        onChange={props.onChange}
                        fullWidth
                        error={Boolean(errors.date_of_admission)}
                        helperText={errors.date_of_admission?.message}
                        />
                    )}
                    name="date_of_admission"
                    defaultValue={null}
                    control={control}
                    rules={{
                        required: "Date of Admission is required.",
                    }}
                    />

                    {/* 4) Time Picker */}
                    <Controller
                    render={(props) => (
                        <KeyboardTimePicker
                        margin="normal"
                        label="Time of Admission"
                        value={props.value}
                        onChange={props.onChange}
                        fullWidth
                        error={Boolean(errors.time_of_admission)}
                        helperText={errors.time_of_admission?.message}
                        />
                    )}
                    name="time_of_admission"
                    defaultValue={null}
                    control={control}
                    rules={{
                        required: "Time of Admission is required.",
                    }}
                    />
                </MuiPickersUtilsProvider>

                {/* Radio Buttons */}
                <FormControl
                    className={classes.inputField}
                    error={Boolean(errors.gender)}
                >
                    <FormLabel>Choose Your Gender</FormLabel>
                    <RadioGroup row name="gender">
                    <FormControlLabel
                        value="female"
                        control={
                        <Radio
                            inputRef={register({
                            required: "Choose your gender",
                            })}
                        />
                        }
                        label="Female"
                    />
                    <FormControlLabel
                        value="male"
                        control={
                        <Radio
                            inputRef={register({
                            required: "Choose your gender",
                            })}
                        />
                        }
                        label="Male"
                    />
                    <FormControlLabel
                        value="other"
                        control={
                        <Radio
                            inputRef={register({
                            required: "Choose your gender",
                            })}
                        />
                        }
                        label="Other"
                    />
                    </RadioGroup>
                    <FormHelperText>{errors.gender?.message}</FormHelperText>
                </FormControl>

                {/* Select */}
                <FormControl
                    fullWidth
                    className={classes.inputField}
                    error={Boolean(errors.course)}
                >
                    <InputLabel id="demo-simple-select-label">
                    Select Your Course
                    </InputLabel>
                    <Controller
                    as={
                        <Select>
                        <MenuItem value="">Choose your course</MenuItem>
                        <MenuItem value="Web Development">Web Development</MenuItem>
                        <MenuItem value="App Development">App Development</MenuItem>
                        <MenuItem value="UI/UX">UI/UX</MenuItem>
                        </Select>
                    }
                    name="course"
                    control={control}
                    defaultValue=""
                    />
                    <Controller
                    render={(props) => (
                        <Select value={props.value} onChange={props.onChange}>
                        <MenuItem value="">Choose your course</MenuItem>
                        <MenuItem value="Web Development">Web Development</MenuItem>
                        <MenuItem value="App Development">App Development</MenuItem>
                        <MenuItem value="UI/UX">UI/UX</MenuItem>
                        </Select>
                    )}
                    name="course"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "please choose your course.",
                    }}
                    />
                    <FormHelperText>{errors.course?.message}</FormHelperText>
                </FormControl>

                {/*  Switch */}
                <FormControlLabel
                    className={classes.inputField}
                    control={<Switch inputRef={register} name="notification" />}
                    label="Send me regular updates"
                />

                {/* Checkbox */}
                <FormControl
                    error={Boolean(errors.tnc)}
                    style={{ display: "block", marginBottom: 15 }}
                >
                    <FormControlLabel
                    control={
                        <Checkbox
                        name="tnc"
                        inputRef={register({
                            required: "please aggree our terms and condtions",
                        })}
                        />
                    }
                    label="I aggree all terms and conditions"
                    />
                    <FormHelperText>{errors.tnc?.message}</FormHelperText>
                </FormControl>

                <Button variant="contained" color="primary" type="submit">
                    create new account
                </Button>
                </form>
            </div>
        </div>
        </>
    )
  }
  export default Signin