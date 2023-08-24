import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import Cities from "./cities";
import { Button, Typography,Badge}  from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useTranslation } from 'react-i18next';
export default function Tabledata(){
  const { t } = useTranslation('navigation');
    const columns = [
      {
        name: <>{t('Supplier')} {t('Name')}</>,
        options: {
          filter: false
        }
      },
      {
        name: <>{t('Supplier')} {t('Company')}</>,
        options: {
          filter: true
        }
      },
      {
        name: <>{t('Location')}</>,
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Cities
                value={value}
                index={tableMeta.columnIndex}
                change={event => updateValue(event)}
              />
            );
          }
        }
      },
     
      {
        name: <>{t('Status')}</>,
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
            <><Badge  color={value ? "warning" :'primary'} badgeContent={value ? 'Active' : 'Deactive'}></Badge> </>
            );
          }
        }
      },
      {
        name:<>{t('Action')}</>,
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
            
                  <Typography width={'100%'}  >
                      <Button size="small" 
                      className="whitespace-nowrap"
                      variant="contained"
                      color="secondary"
                      startIcon={<FuseSvgIcon size={20}>heroicons-solid:pencil</FuseSvgIcon>}
                      >
                    {t('Edit')}  
                    </Button>
                </Typography>
           
            );
          }
        }
      }
    ];

    const data = [
      ["Robin Duncan", "Business Analyst", "Los Angeles", false,''],
      ["Mel Brooks", "Business Consultant", "Oklahoma City", true,''],
      ["Harper White", "Attorney", "Pittsburgh", false],
      ["Kris Humphrey", "Agency Legal Counsel", "Laredo", true],
      ["Frankie Long", "Industrial Analyst", "Austin", false],
      ["Brynn Robbins", "Business Analyst", "Norfolk", true],
      ["Justice Mann", "Business Consultant", "Chicago", false],
      [
        "Addison Navarro",
        "Business Management Analyst",
        "New York",
        50,
        295000,
        true
      ],
      ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, 200000, false],
      ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, 400000, true],
      ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, 110000, false],
      ["Danny Leon", "Computer Scientist", "Newark", 60, 220000, true],
      ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, 180000, false],
      ["Jesse Hall", "Business Analyst", "Baltimore", 44, 99000, true],
      ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, 90000, false],
      ["Terry Macdonald", "Commercial Specialist", "Miami", 39, 140000, true],
      ["Justice Mccarthy", "Attorney", "Tucson", 26, 330000, false],
      ["Silver Carey", "Computer Scientist", "Memphis", 47, 250000, true],
      ["Franky Miles", "Industrial Analyst", "Buffalo", 49, 190000, false],
      ["Glen Nixon", "Corporate Counselor", "Arlington", 44, 80000, true],
      [
        "Gabby Strickland",
        "Business Process Consultant",
        "Scottsdale",
        26,
        45000,
        false
      ],
      ["Mason Ray", "Computer Scientist", "San Francisco", 39, 142000, true]
    ];

    const options = {
      filter: true,
      filterType: "dropdown",
     // responsive: "scroll"
    };

    return (
      <div style={{padding:'20px'}}>
      <MUIDataTable
        title={t('Supplier List')}
        data={data}
        columns={columns}
        options={options}
      />
      </div>
    );
    
  }

//ReactDOM.render(<App />, document.getElementById("root"));
