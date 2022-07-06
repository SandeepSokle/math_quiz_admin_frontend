import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const MainListItems = (props) => {
  const { selectedClass, setSelectedClass,classList } = props;
  return (
    <React.Fragment>
      {classList?.map((ele, idx) => {
        return (
          <ListItemButton
            onClick={() => {
              setSelectedClass(`Class ${idx + 1}`);
            }}
            sx={{
              background: `${
                selectedClass === `Class ${idx + 1}`
                  ? "rgb(225 225 225 / 87%)"
                  : "white"
              }`,
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={`Class ${idx + 1}`} />
          </ListItemButton>
        );
      })}
    </React.Fragment>
  );
};
