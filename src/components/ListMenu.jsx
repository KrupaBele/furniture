import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

const ListMenu = ({ list, listName, toggleDrawer }) => {
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState(
    Object.assign({}, Array(list.length).fill(null))
  );

  return (
    <>
      <List>
        <Box onClick={toggleDrawer("left", false)}>
          <ListItemButton
            sx={{ py: 0 }}
            onClick={() => {
              toggleDrawer("left", false);
              navigate(`/${listName}`);
            }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </Box>
        {list.map((i, j) => (
          <ListItem key={j} disablePadding>
            <ListItemButton
              sx={{ py: 0 }}
              id="italia-button"
              aria-controls={Boolean(anchor[j]) ? "italia-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={Boolean(anchor[j]) ? "true" : undefined}
              onClick={(e) =>
                setAnchor((prev) => ({ ...prev, [j]: e.currentTarget }))
              }
            >
              <ListItemText primary={i.item} />
            </ListItemButton>
            {i.subitems?.length ? (
              <Menu
                elevation={3}
                id="italia-menu"
                anchorEl={anchor[j]}
                open={Boolean(anchor[j])}
                onClose={() => setAnchor({ 0: null, 1: null, 2: null })}
                MenuListProps={{
                  "aria-labelledby": "italia-button",
                }}
              >
                {i.subitems.map((k, l) => (
                  <Box key={l} onClick={toggleDrawer("left", false)}>
                    <MenuItem
                      onClick={() => {
                        setAnchor({ 0: null, 1: null, 2: null });
                        navigate(`${k.link}`);
                      }}
                    >
                      {k.title}
                    </MenuItem>
                  </Box>
                ))}
              </Menu>
            ) : null}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListMenu;
