import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TopicIcon from '@mui/icons-material/Topic';
export const ClassData = (props) => {
  return (
    <div
      style={{
        fontSize: "4rem",
        width: "100%",
        height: "100%",
        fontWeight: "bold",
        border: "1px solid black",
      }}
    >
      Hello Sokle
      {[0, 1, 2, 3, 4]?.map((ele, idx) => {
        return (
          <ListItemButton
            // onClick={() => {
            //   setSelectedClass(`Class ${idx + 1}`);
            // }}
            // sx={{
            //   background: `${
            //     selectedClass === `Class ${idx + 1}`
            //       ? "rgb(225 225 225 / 87%)"
            //       : "white"
            //   }`,
            // }}
          >
            <ListItemIcon>
              <TopicIcon />
            </ListItemIcon>
            <ListItemText primary={`Topic ${idx + 1}`} />
          </ListItemButton>
        );
      })}
    </div>
  );
};
