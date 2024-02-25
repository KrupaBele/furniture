import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import {
  Box,
  Divider,
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import ListMenu from "./ListMenu";
import { italiaList, editionsList } from "../configs/list.cofig";

// MUI Accordian
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<MdOutlineArrowForwardIos sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  paddingTop: "0",
  paddingBottom: "0",
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  padding: theme.spacing(0),
  paddingLeft: theme.spacing(3),
}));

const Sidebar = ({ drawer, toggleDrawer }) => {
  const navigate = useNavigate();

  // MUI Accordian
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Drawer
        anchor={"left"}
        open={drawer["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <Box
          //   role="presentation"
          //   onClick={toggleDrawer("left", false)}
          sx={{ width: "left" === "top" || "left" === "bottom" ? "auto" : 250 }}
          onKeyDown={toggleDrawer("left", false)}
        >
          <Box onClick={toggleDrawer("left", false)}>
            <ListItemButton
              sx={{
                width: "left" === "top" || "left" === "bottom" ? "auto" : 250,
              }}
              onClick={() => {
                toggleDrawer("left", false);
                navigate("/");
              }}
            >
              <ListItemIcon>
                <HiOutlineHome className="text-lg" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Box>

          <Divider />

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              Wolf Italia
            </AccordionSummary>
            <AccordionDetails>
              <ListMenu
                list={italiaList}
                listName={"italia"}
                toggleDrawer={toggleDrawer}
              />
            </AccordionDetails>
          </Accordion>

          <Divider />

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              Wolf Editions
            </AccordionSummary>
            <AccordionDetails>
              <ListMenu
                list={editionsList}
                listName={"editions"}
                toggleDrawer={toggleDrawer}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
