import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "./logo";
import {
  Circle,
  FmdGoodOutlined,
  LocalPhoneOutlined,
  LocalPrintshop,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box>
      <Box
        display={{ md: "block", xs: "none" }}
        sx={{
          backgroundImage: "url('/images/footer.jpg')",
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat",
          backgroundPositionX: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <Typography variant="body2">
          جهت درخواست دموی آنلاین سامانه و بررسی کلیه قابلیت ها تماس بگیرید
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#F1F6FF" }}>
        <Container>
          <Grid
            container
            spacing={2}
            mt={0}
            py={{ xs: 2, md: 4 }}
            justifyContent={"space-around"}
          >
            <Grid item md={3} xs={12}>
              <Logo />
              <Typography variant="body2" display={{ xs: "none", md: "block" }}>
                مجموعه ای قدرتمند از ابزارهایی برای تحلیل و مدیریت فرایند کسب و
                کار.
              </Typography>
            </Grid>
            <Grid item md={3} xs={5}>
              <Typography
                variant="subtitle1"
                borderBottom={"2px solid #0055EF"}
              >
                دسترسی سریع
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    disableGutters
                    component="a"
                    href="#simple-list"
                  >
                    <Typography variant="body2">
                      <Circle
                        sx={{
                          verticalAlign: "middle",
                          fontSize: "10px",
                          pr: 1,
                        }}
                        color="primary"
                      />
                      صفحه نخست
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    disableGutters
                    component="a"
                    href="#simple-list"
                  >
                    <Typography variant="body2">
                      <Circle
                        sx={{
                          verticalAlign: "middle",
                          fontSize: "10px",
                          pr: 1,
                        }}
                        color="primary"
                      />
                      مقالات
                    </Typography>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    disableGutters
                    component="a"
                    href="#simple-list"
                  >
                    <Typography variant="body2">
                      <Circle
                        sx={{
                          verticalAlign: "middle",
                          fontSize: "10px",
                          pr: 1,
                        }}
                        color="primary"
                      />
                      تماس با ما
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography
                variant="subtitle1"
                borderBottom={"2px solid #0055EF"}
              >
                ارتباط با ما
              </Typography>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <FmdGoodOutlined
                    fontSize="small"
                    sx={{ pr: 1 }}
                    color="primary"
                  />
                  <ListItemText>
                    <Typography variant="body2">
                      اصفهان، میدان آزادی، ابتدای خیابان سعادت آباد کد پستی
                      :8168645481
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography variant="body2">
                    <LocalPhoneOutlined
                      fontSize="small"
                      sx={{ pr: 1 }}
                      color="primary"
                    />
                    (031) - 38280000
                  </Typography>
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <Typography variant="body2">
                    <LocalPrintshop
                      fontSize="small"
                      sx={{ pr: 1 }}
                      color="primary"
                    />
                    36660745 - (031)
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Stack direction={"row"} justifyContent={"center"} spacing={1} display={{md:"none"}}>
            <span>
              <img src="/images/instagram.svg" alt="instagram" />
            </span>
            <span>
              <img src="/images/twiter.svg" alt="twiter" />
            </span>
            <span>
              <img src="/images/linkdin.svg" alt="linkdin" />
            </span>
            <span>
              <img src="/images/telegram.svg" alt="telegram" />
            </span>
          </Stack>
          <Box
            p={2}
            textAlign={"center"}
            sx={{ borderTop: "1px solid #D8DADD" }}
          >
            <Typography variant="body2" color={"GrayText"}>
              طراحی و پیاده سازی توسط شرکت ایریسا.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
