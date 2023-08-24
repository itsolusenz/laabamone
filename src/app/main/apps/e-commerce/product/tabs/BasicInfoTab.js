import {TextField,Typography ,Button,Box} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <div>
   {/*}   <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label="Description"
            type="text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="categories"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select multiple categories"
                label="Categories"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      />

      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select multiple tags"
                label="Tags"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
              />*/}
              <Typography  marginTop={17} width={'100%'} align={'Center'} sx={{fontSize:'20px'}} >No quick sale items</Typography>
              <Typography width={'100%'} align={'Center'} >
              Complete sales quickly by setting up quick sale items.</Typography>

              <Typography marginTop={3} width={'100%'} align={'Center'} ><Button 
            className="whitespace-nowrap"
            variant="contained"
            color="primary"
            startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
          >
            Add items
          </Button></Typography>
    </div>
  );
}

export default BasicInfoTab;
