import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import formatISO from 'date-fns/formatISO';
import { selectSelectedLabels } from './labelsSlice';
import { useEffect, useRef, useState } from 'react';
export const dateFormat = 'YYYY-MM-DDTHH:mm:ss.sssZ';

/*export const getEvents = createAsyncThunk('calendarApp/events/getEvents', async () => {
  const response = await axios.get('/api/calendar/events');
  const data = await response.data;

  return data;
});*/

export const getEvents = createAsyncThunk('calendarApp/events/getEvents', async () => {
  const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=ap_list');
  const json = await response.json();
  return json;
});

export const addEvent = createAsyncThunk(
  'calendarApp/events/addEvent',
  async (newEvent, { dispatch }) => {



    const response = await axios.post('/api/calendar/events', newEvent);
    const data = await response.data;

    return data;
  }
);

export const updateEvent = createAsyncThunk(
  'calendarApp/events/updateEvent',
  async (event, { dispatch }) => {
    /*const id =event.id;
    const response = await fetch('https://www.laabamone.com/appoint_api.php?eventtype=ap_list_1&eventid='+id);
    const json = await response.json();
    return json;*/
    const response = await axios.put(`/api/calendar/events/${event.id}`, event);
    const data = await response.data;

    return data;
  }
);

export const removeEvent = createAsyncThunk(
  'calendarApp/events/removeEvent',
  async (eventId, { dispatch }) => {
    const response = await axios.delete(`/api/calendar/events/${eventId}`);
    const data = await response.data;

    return data;
  }
);

const eventsAdapter = createEntityAdapter({});

export const {
  selectAll: selectEvents,
  selectIds: selectEventIds,
  selectById: selectEventById,
} = eventsAdapter.getSelectors((state) => state.calendarApp.events);

const eventsSlice = createSlice({
  name: 'calendarApp/events',
  initialState: eventsAdapter.getInitialState({
    eventDialog: {
      type: 'new',
      props: {
        open: false,
        anchorPosition: { top: 200, left: 400 },
      },
      data: null,
    },
  }),
  reducers: {
    openNewEventDialog: {
      prepare: (selectInfo) => {
        const { start, end, jsEvent } = selectInfo;
        const payload = {
          type: 'new',
          props: {
            open: true,
            anchorPosition: { top: jsEvent.pageY, left: jsEvent.pageX },
          },
          data: {
            start: formatISO(new Date(start)),
            end: formatISO(new Date(end)),
          },
        };
        return { payload };
      },
      reducer: (state, action) => {
        state.eventDialog = action.payload;
      },
    },
    openEditEventDialog: {
      prepare: (clickInfo) => {
        const { jsEvent, event } = clickInfo;
        const { id, clientid, serviceid, title, allDay, start, end, extendedProps } = event;

        const payload = {
          type: 'edit',
          props: {
            open: true,
            anchorPosition: { top: jsEvent.pageY, left: jsEvent.pageX },
          },
          data: {
            id,
            clientid,
            serviceid,
            title,
            allDay,
            extendedProps,
            start: formatISO(new Date(start)),
            end: formatISO(new Date(end)),
          },
        };
        return { payload };
      },
      reducer: (state, action) => {
        state.eventDialog = action.payload;
      },
    },
    closeNewEventDialog: (state, action) => {
      state.eventDialog = {
        type: 'new',
        props: {
          open: false,
          anchorPosition: { top: 200, left: 400 },
        },
        data: null,
      };
    },
    closeEditEventDialog: (state, action) => {
      state.eventDialog = {
        type: 'edit',
        props: {
          open: false,
          anchorPosition: { top: 200, left: 400 },
        },
        data: null,
      };
    },
  },
  extraReducers: {
    [getEvents.fulfilled]: eventsAdapter.setAll,
    [addEvent.fulfilled]: eventsAdapter.addOne,
    [updateEvent.fulfilled]: eventsAdapter.upsertOne,
    [removeEvent.fulfilled]: eventsAdapter.removeOne,
  },
});

export const {
  openNewEventDialog,
  closeNewEventDialog,
  openEditEventDialog,
  closeEditEventDialog,
} = eventsSlice.actions;

export const selectFilteredEvents = createSelector(
  [selectSelectedLabels, selectEvents],
  (selectedLabels, events) => {
    return events.filter((item) => selectedLabels.includes(item.extendedProps.label));
  }
);

export const selectEventDialog = ({ calendarApp }) => calendarApp.events.eventDialog;

export default eventsSlice.reducer;
