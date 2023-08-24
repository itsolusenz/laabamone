import React, { useEffect, useState, useRef } from 'react';
import { Grid, Snackbar, IconButton, Badge, Button, Chip, Typography, TextField } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
function PackageCategory(props) {
    const [Cat, setCat] = useState([]);
    const [Firstname, setFirstname] = useState([]);
    const [description, setdescription] = useState([]);
    const [snackopen, setsnackopen] = useState(false);
    const [snackmsg, setsnackmsg] = useState('Successfully Added');
    const [state, setState] = React.useState({
        snackopen: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal } = state;
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const { onCloseCategory, Categoryid } = props;
    useEffect(() => {

        const getcatlist = async () => {
            let string = '';
            if (Categoryid != null && Categoryid != undefined && Categoryid != '' && Categoryid != '0') {
                string += '&cid=' + Categoryid;
            }

            const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagecategorylist' + string);
            const json = await response.json();
            console.log(json);
            setCat(json);
            setFirstname(json[0]['name']);
            setdescription(json[0]['description']);

            // return json;
        }
        if (Categoryid != null && Categoryid != undefined && Categoryid != '' && Categoryid != '0') {
            getcatlist();
        }


    }, [Categoryid]);
    const savecategory = async () => {
        console.log(Firstname);
        console.log(description);
        let str = '';
        if (Categoryid != null && Categoryid != undefined && Categoryid != '' && Categoryid != '0') {

            str += '&id=' + Categoryid;
        }
        console.log('---' + str);

        fetch(
            'https://www.laabamone.com/appoint_api.php?eventtype=packagecategoryadd&name=' +
            Firstname + str +
            '&description=' +
            description
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log('yes');
                    if (result[0]['error'] == '1') {
                        setsnackopen(true);
                        setsnackmsg(result[0]['msg']);
                    }
                    else {
                        setsnackopen(true);
                        setsnackmsg(result[0]['msg']);
                        // onCloseCategory();
                        setFirstname('');
                        setdescription('');

                    }
                },
                (error) => {
                    console.log('no');
                    console.log(error);
                }
            );

    }

    return (
        <Grid fullWidth container>
            <Snackbar style={{ paddingTop: '56px' }} open={snackopen} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000}>
                <Alert onClose={() => setsnackopen(false)} severity="success" sx={{ width: '100%' }}>
                    {snackmsg}
                </Alert>
            </Snackbar>
            <Grid item xs={12}><br />
                <Typography className="font-semibold mb-4 text-15"> Category name</Typography>
                <TextField
                    fullWidth
                    placeholder={`eg.Hair Services`} value={Firstname} onChange={(e) => setFirstname(e.target.value)} variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>

                <Typography className="font-semibold mb-4 text-15" style={{ padding: '3px' }}> Category Description</Typography>
                <TextField fullWidth
                    id="outlined-multiline-static"

                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                />

            </Grid>
            <Grid item xs={12} sx={{ padding: '20px' }}>
                <Typography justifyContent={'right'} sx={{ align: 'right' }} fullWidth>
                    <Button variant="contained"
                        color="primary" onClick={(ev) => onCloseCategory()}>Close</Button>
                    &nbsp;  <Button variant="contained"
                        color="primary" onClick={() => savecategory()} autoFocus>
                        Save
                    </Button>
                </Typography>
            </Grid>
        </Grid>

    );
}

export default PackageCategory