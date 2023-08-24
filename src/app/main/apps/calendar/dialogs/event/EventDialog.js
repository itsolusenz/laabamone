import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import FuseUtils from '@fuse/utils/FuseUtils';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/lab';
import ListSubheader from '@mui/material/ListSubheader';
import Grid from '@mui/material/Grid';


import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import _ from '@lodash';
import { Popover } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Moment from 'moment';
import axios from 'axios';
import {
  addEvent,
  closeEditEventDialog,
  closeNewEventDialog,
  removeEvent,
  selectEventDialog,
  updateEvent,
} from '../../store/eventsSlice';
import EventLabelSelect from '../../EventLabelSelect';
import EventModel from '../../model/EventModel';
import { selectFirstLabelId } from '../../store/labelsSlice';
import { display } from '@mui/system';
import { Block } from '@material-ui/icons';
export const dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';
const defaultValues = EventModel();

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
});

function EventDialog(props) {
  const dispatch = useDispatch();
  const eventDialog = useSelector(selectEventDialog);
  const firstLabelId = useSelector(selectFirstLabelId);
  const { className } = props;

  const [Typevalue, setTypevalue] = useState('1');
  const [clientval, setclientval] = useState('0');
  const [serviceval, setserviceval] = useState('0');
  const [Typeremindvalue, setTyperemindvalue] = useState('1');
  const [viewremind, setviewremind] = useState('none');
  const [Desc, setDesc] = useState();
  const { reset, formState, watch, control, getValues } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const start = watch('start');
  const end = watch('end');
  const id = watch('id');

  /**
   * Initialize Dialog with Data
   */
  const initDialog = useCallback(() => {
    /**
     * Dialog type: 'edit'
     */
    if (eventDialog.type === 'edit' && eventDialog.data) {
      reset({ ...eventDialog.data });
    }

    /**
     * Dialog type: 'new'
     */
    if (eventDialog.type === 'new') {
      reset({
        ...defaultValues,
        ...eventDialog.data,
        extendedProps: {
          ...defaultValues.extendedProps,
          label: firstLabelId,
        },
        id: FuseUtils.generateGUID(),
      });
    }
  }, [eventDialog.data, eventDialog.type, reset]);

  /**
   * On Dialog Open
   */
  const [Clientdata, setClientdata] = useState([]);
  const [Cat, setCat] = useState([]);
  useEffect(() => {

    if (eventDialog.props.open) {
      initDialog();
    }
    const data = getValues();
    console.log(data);
    if (data.title != '') {
      setDesc(data.extendedProps.desc);
      setTypevalue(data.extendedProps.aptype);
      setclientval(data.extendedProps.clientid);
      setserviceval(data.extendedProps.serviceid);
      if (data.extendedProps.aptype == '2') {
        setviewremind('block');
        setTyperemindvalue(data.extendedProps.remind_me);
      }

    }


    const companyid = localStorage.getItem('login_cid1');
    console.log('companyid', companyid)
    const callclientlist = async () => {

      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=clientlist&companyid=' + companyid);
      const json = await response.json();
      console.log('res', json);
      setClientdata(json);

    }
    const getcatlist = async () => {
      const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=packagecategorylist');
      const json = await response.json();
      console.log(json.length);
      setCat(json);
      // return json;
    }
    getcatlist();
    callclientlist();
  }, [eventDialog.props.open, initDialog]);

  /**
   * Close Dialog
   */
  function closeComposeDialog() {
    return eventDialog.type === 'edit'
      ? dispatch(closeEditEventDialog())
      : dispatch(closeNewEventDialog());
  }

  /**
   * Form Submit
   */
  const eventadd = async event => {

    const data = getValues();
    const id = data.id;
    let str = '';
    if (id != '' && id != undefined && id != null & eventDialog.type !== 'new') {
      str = '&id=' + id;
    }

    const title = data.title;
    let allDay = 0;
    if (data.allDay == true) {
      allDay = 1;
    }

    const r_start = Moment(data.start).format('DD-MM-YYYY h:mm a');
    const r_end = Moment(data.end).format('DD-MM-YYYY h:mm a');
    const start_d = encodeURIComponent(Moment(data.start).format('YYYY-MM-DDTHH:mm:ss.sssZ'));
    const end_d = encodeURIComponent(Moment(data.end).format('YYYY-MM-DDTHH:mm:ss.sssZ'));

    // const start_d = start_d1.replace("+", "***");   
    // const end_d = end_d1.replace("+", "***");
    const label = data.extendedProps.label;
    const description = Desc;

    let Remindme = '';
    if (Typevalue == '1') {
      Remindme = '0';
    }
    else {
      Remindme = Typeremindvalue;
    }
    console.log('yesddd', clientval)
    //console.log("https://www.laabamone.com/appoint_api.php?eventtype=add" + str + "&clientid=" + clientval + "&serviceid=" + serviceval + "&title=" + title + "&label=" + label + "&allDay=" + allDay + "&start=" + start_d + "&end=" + end_d + "&start1=" + r_start + "&end1=" + r_end + "&desc=" + description + "&aptype=" + Typevalue + "&remind_me=" + Typeremindvalue)
    fetch("https://www.laabamone.com/appoint_api.php?eventtype=add" + str + "&clientid=" + clientval + "&serviceid=" + serviceval + "&title=" + title + "&label=" + label + "&allDay=" + allDay + "&start=" + start_d + "&end=" + end_d + "&start1=" + r_start + "&end1=" + r_end + "&desc=" + description + "&aptype=" + Typevalue + "&remind_me=" + Typeremindvalue)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('yes');
          console.log(result);
        },
        (error) => {
          console.log('no');
          console.log(error);

        }
      )


  }
  function onSubmit(ev) {
    ev.preventDefault();
    const data = getValues();


    //console.log('-p-',data);
    if (eventDialog.type === 'new') {
      eventadd();
      dispatch(addEvent({ adtype: 1, ...data }));
    } else {
      eventadd();
      dispatch(updateEvent({ ...eventDialog.data, ...data }));
    }
    closeComposeDialog();
  }

  /**
   * Remove Event
   */
  const handleRemove = async () => {
    const data = getValues();
    const id = data.id;

    const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=delete&appid=' + id);
    const json = await response.json();
    dispatch(removeEvent(id));
    closeComposeDialog();
  }
  const handleChange = (event) => {
    setTypevalue(event.target.value);
    if (event.target.value == '2') {
      setviewremind('block');
    }
    else {
      setviewremind('none');
    }
    // onChange(event.target.value);
    //alert(event.target.value)
  };

  return (
    <Popover
      {...eventDialog.props}
      anchorReference="anchorPosition"
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      onClose={closeComposeDialog}
      component="form"
    >
      <div className="flex flex-col max-w-full p-24 pt-32 sm:pt-40 sm:p-32 w-480">
        <div className="flex sm:space-x-24 mb-16">
          <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
            heroicons-outline:pencil-alt
          </FuseSvgIcon>
          <FormControl fullWidth className={className}>
            <InputLabel id="select-label">Type</InputLabel>
            <Select
              labelId="select-label"
              id="label-select"
              value={Typevalue}
              // control={control}
              name="aptype"
              label="Type"
              onChange={handleChange}
              classes={{ select: 'flex items-center space-x-12' }}
            >

              <MenuItem value='1' className="space-x-12"  >
                <span>Appointment</span>
              </MenuItem>
              <MenuItem value='2' className="space-x-12"  >
                <span>Reminder</span>
              </MenuItem>

            </Select>
          </FormControl>
        </div>
        <div className="flex sm:space-x-24 mb-16">
          <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
            heroicons-outline:pencil-alt
          </FuseSvgIcon>
          <FormControl fullWidth className={className}>
            <InputLabel id="select-label">Client</InputLabel>
            <Select
              labelId="select-label"
              id="label-select"
              value={clientval}
              // control={control}
              name="client"
              label="Select Client"
              onChange={(e) => setclientval(e.target.value)}
              classes={{ select: 'flex items-center space-x-12' }}
            >

              <MenuItem value='0' className="space-x-12"  >
                <span>Select</span>
              </MenuItem>

              {Clientdata.map((a, i) => a.success != 'error' &&
                <MenuItem value={a.id} className="space-x-12" key={i} >
                  <span>{a.name}</span>
                </MenuItem>

              )}
            </Select>
          </FormControl>
        </div>
        <div className="flex sm:space-x-24 mb-16">
          <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
            heroicons-outline:pencil-alt
          </FuseSvgIcon>
          <FormControl fullWidth className={className}>
            <InputLabel id="select-label">Service</InputLabel>
            <Select
              labelId="select-label"
              id="label-select"
              value={serviceval}
              // control={control}
              name="service"
              label="Select Service"
              onChange={(e) => setserviceval(e.target.value)}
              classes={{ select: 'flex items-center space-x-12' }}
            >
              <MenuItem value='0' className="space-x-12"  >
                <span>Select</span>
              </MenuItem>
              {Cat.map((b, j) =>
                b.packagedetails.map((c, k) =>
                  <MenuItem value={c.id} className="space-x-12" key={k}  >
                    <span>{c.servicename}</span>
                  </MenuItem>
                )


              )}

            </Select>
          </FormControl>
        </div>

        <div className="flex sm:space-x-24 mb-16">
          <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
            heroicons-outline:pencil-alt
          </FuseSvgIcon>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="title"
                label="Title"
                className="flex-auto"
                error={!!errors.title}
                helperText={errors?.title?.message}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                autoFocus
                required
                fullWidth
              />
            )}
          />
        </div>

        <div className="flex sm:space-x-24 mb-16">
          <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
            heroicons-outline:calendar
          </FuseSvgIcon>
          <div className="w-full">
            <div className="flex flex-column sm:flex-row w-full items-center space-x-16">
              <Controller
                name="start"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    onChange={onChange}
                    renderInput={(_props) => (
                      <TextField label="Start" className="mt-8 mb-16 w-full" {..._props} />
                    )}
                    className="mt-8 mb-16 w-full"
                    maxDate={end}
                  />
                )}
              />

              <Controller
                name="end"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    onChange={onChange}
                    renderInput={(_props) => (
                      <TextField label="End" className="mt-8 mb-16 w-full" {..._props} />
                    )}
                    minDate={start}
                  />
                )}
              />
            </div>

            <Controller
              name="allDay"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  className="mt-8"
                  label="All Day"
                  control={
                    <Switch
                      onChange={(ev) => {
                        onChange(ev.target.checked);
                      }}
                      checked={value}
                      name="allDay"
                    />
                  }
                />
              )}
            />
          </div>
        </div>

        <div className="flex sm:space-x-24 mb-16">
          <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
            heroicons-outline:tag
          </FuseSvgIcon>

          <Controller
            name="extendedProps.label"
            control={control}
            render={({ field }) => <EventLabelSelect className="mt-8 mb-16" {...field} />}
          />
        </div>

        <div className="flex sm:space-x-24 mb-16">
          <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
            heroicons-outline:menu-alt-2
          </FuseSvgIcon>

          <Controller
            name="extendedProps.desc"
            control={control}
            render={({ field }) => (
              <TextField

                className="mt-8 mb-16"
                id="desc"
                label="Description"
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                multiline
                value={Desc}
                rows={5}
                variant="outlined"
                fullWidth
              />
            )}
          />
        </div>
        {viewremind == 'block' &&
          <div className="flex sm:space-x-24 mb-16" >
            <FuseSvgIcon className="hidden sm:inline-flex mt-16" color="action">
              heroicons-outline:pencil-alt
            </FuseSvgIcon>
            <FormControl fullWidth className={className}>
              <InputLabel id="select-label">Remind me</InputLabel>
              <Select
                labelId="select-label"
                id="label-select"
                value={Typeremindvalue}
                control={control}
                name="extendedProps.remindme"
                label="Remind Me"
                onChange={(e) => setTyperemindvalue(e.target.value)}
                classes={{ select: 'flex items-center space-x-12' }}
              >

                <MenuItem value='never' className="space-x-12"  >
                  <span>Never</span>
                </MenuItem>
                <MenuItem value='0' className="space-x-12"  >
                  <span>0 minutes before</span>
                </MenuItem>
                <MenuItem value='5-min' className="space-x-12"  >
                  <span>5 minutes before</span>
                </MenuItem>
                <MenuItem value='15-min' className="space-x-12"  >
                  <span>15 minutes before</span>
                </MenuItem>
                <MenuItem value='30-min' className="space-x-12"  >
                  <span>30 minutes before</span>
                </MenuItem>
                <MenuItem value='1-hr' className="space-x-12"  >
                  <span>1 hour before</span>
                </MenuItem>
                <MenuItem value='12-hr' className="space-x-12"  >
                  <span>12 hour before</span>
                </MenuItem>
                <MenuItem value='1-day' className="space-x-12"  >
                  <span>1 day before</span>
                </MenuItem>
                <MenuItem value='12-week' className="space-x-12"  >
                  <span>12 week before</span>
                </MenuItem>

              </Select>
            </FormControl>
          </div>
        }

        {eventDialog.type === 'new' ? (
          <div className="flex items-center space-x-8">
            <div className="flex flex-1" />
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmit}
              disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Add
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-8">
            <div className="flex flex-1" />
            <IconButton onClick={handleRemove} size="large">
              <FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmit}
            //disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Save
            </Button>
          </div>
        )}
      </div>
    </Popover>
  );
}

export default EventDialog;
