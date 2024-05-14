import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "./logo";
import { styled } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";

export default function NavMenu() {
  let [tab, setTab] = useState(1);
  let [sidebarMenu, setSidebarMenu] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setSidebarMenu(newOpen);
  };
  function handleTab(event, tab) {
    setTab(tab);
  }
  const CustomTab = styled(Tab)({
    paddingTop: 20,
    paddingBottom: 20,
    color: "black",
  });
  return (
    <div>
      <AppBar
        position="sticky"
        sx={{ mt: 2, borderRadius: 2, bgcolor: "white" }}
      >
        <Stack
          px={{ md: 3, xs: 1 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <Box display={{ xs: "none", md: "block" }}>
            <Tabs value={tab} onChange={handleTab}>
              <CustomTab label="صفحه نخست" value={1} />
              <CustomTab label="بلاگ" value={2} />
              <CustomTab label="درباره ما" value={3} />
              <CustomTab label="تماس با ما" value={4} />
            </Tabs>
          </Box>
          <Box>
            <Button variant="text" size="small" sx={{ borderRadius: "8px" }}>
              ورود
            </Button>
            <Button variant="contained" size="small">ثبت نام</Button>
          </Box>
          <Box display={{ md: "none" }}>
            <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
              <Menu
                color="action"
                fontSize="medium"
                sx={{ verticalAlign: "middle" }}
              />
            </IconButton>
          </Box>
        </Stack>
      </AppBar>
      <Drawer open={sidebarMenu} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {["صفحه نخست", "بلاگ", "درباره ما", "تماس با ما"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
