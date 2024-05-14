import React from "react";
import image2 from "./image2.svg";
import {
  createTheme,
  Button,
  Typography,
  Container,
  Stack,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import "./App.css";
import { styled } from "@mui/material/styles";
import { ArrowBackIosNew } from "@mui/icons-material";
import Carousel from "./components/carousel";
import LandingAccordion from "./components/LandingAccordion";
import Footer from "./components/Footer";
import NavMenu from "./components/NavMenu";

export default function LandingPage() {
  const theme = createTheme({
    palette: { primary: { main: "#ccc" } },
    typography: { variant1: { fontSize: "5rem", color: "red" } },
  });

  const articles = [
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ...",
      image: "/images/article/image1.jpg",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ...",
      image: "/images/article/image2.jpg",
    },
    {
      title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ...",
      image: "/images/article/image3.jpg",
    },
  ];
  const accordion = [
    {
      title: "عنوان 1",
      details:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ...",
    },
    {
      title: "عنوان 2",
      details:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ...",
    },
    {
      title: "عنوان 3",
      details:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع ...",
    },
  ];

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <div>
      <Container>
        <NavMenu />
        <Box
          sx={{
            height: { xs: "389px", md: "554px" },
            width: "65%",
            backgroundColor: "rgba(239, 245, 255, 0.9)",
            position: "absolute",
            borderBottomLeftRadius: "85px",
            top: 0,
            right: 0,
            zIndex: -1,
          }}
        />
        <Box
          display={"flex"}
          justifyContent={{ xs: "center", sm: "normal" }}
          sx={{
            backgroundImage: {
              xs: "url('/images/header/mobile-header.svg')",
              md: `url(${image2})`,
            },
            mt: 3,
            height: { xs: 253, md: 495 },
            backgroundRepeat: "no-repeat",
          }}
        >
          <Stack
            justifyContent="center"
            maxWidth={400}
            spacing={3}
            alignItems={{ xs: "center", sm: "normal" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              fontWeight={800}
              textAlign={{ xs: "center", sm: "inherit" }}
            >
              مدیریت فرآیندهای کسب و کار
            </Typography>
            <Typography
              variant="body2"
              color={"GrayText"}
              textAlign={{ xs: "center", sm: "inherit" }}
            >
              به عنوان یک راهکار جامع در حوزه مدیریت فرایند ، همسو با ارائه
              امکانات متعدد به مدیران و تحلیلگران این امکان را می دهد که به صورت
              هوشمندانه و با دقت بر عملکرد سازمان نظارت داشته باشند و در نهایت
              با بهبودهای مداوم بهره وری را افزایش دهند.
            </Typography>
            <Button
              variant="contained"
              endIcon={<ArrowBackIosNew />}
              sx={{ width: "fit-content" }}
            >
              پیوستن به همسو
            </Button>
          </Stack>
        </Box>
        <Grid container direction={"column"}>
          {/* articles */}
          <Grid item container order={{ xs: 3, md: 1 }}>
            <Grid item mt={5} width={"100%"}>
              <Typography variant="h5" fontWeight={800} textAlign={"center"}>
                مقالات
              </Typography>
              <Typography
                variant="body2"
                color={"GrayText"}
                mt={2}
                textAlign={"center"}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </Typography>
              <Box mt={2}>
                <Carousel items={articles} />
              </Box>
            </Grid>
          </Grid>
          {/* hamso capabilities */}
          <Grid container item order={{ xs: 1, md: 2 }}>
            <Box mt={5}>
              <Typography variant="h5" fontWeight={800} textAlign={"center"}>
                قابلیت های همسو
              </Typography>
              <Typography
                variant="body2"
                color={"GrayText"}
                mt={2}
                textAlign={"center"}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              </Typography>
              <Box
                sx={{
                  height: { xs: "437px", md: "483px" },
                  width: "65%",
                  backgroundColor: "rgba(239, 245, 255, 0.9)",
                  position: "absolute",
                  borderTopRightRadius: "85px",
                  borderBottomRightRadius: "85px",
                  top: { xs: 686, md: 1482 },
                  left: 0,
                  zIndex: -1,
                }}
              />
              <Grid item container spacing={{ xs: 3, sm: 0 }}>
                <Grid container item alignItems="center" spacing={{ sm: 2 }}>
                  <Grid item sm={6}>
                    <Img src="/images/capabilities/1.png"></Img>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="h6">
                      پشتیبانی از چهارچوب طبقه بندی فرایندها
                    </Typography>
                    <Typography variant="body2" color={"GrayText"} mt={2}>
                      همسو با پشتیبانی از تدوین مدل های از نوع نقشه سازمان
                      (Enterprise Map)، گروه فرایند (Process Group) و فرایند کسب
                      و کار (Business Process) امکان دسته‌بندی فرایندها را فراهم
                      می‌کند.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  direction={{ xs: "column-reverse", sm: "row" }}
                  alignItems="center"
                  spacing={{ sm: 2 }}
                >
                  <Grid item sm={6}>
                    <Typography variant="h6">ابزار مدل سازی قدرتمند</Typography>
                    <Typography variant="body2" color={"GrayText"} mt={2}>
                      با Designer تحت وب همسو می‌توانید مدل های فرایندی را با
                      استاندارد BPMN 2.0 تدوین کنید. دستیار اعتبارسنجی مدل، با
                      ارائه اعلان‌های لازم در هنگام طراحی به کاربر امکان طراحی
                      مدل با بیشترین انطباق با استاندارد BPMN 2.0 را فراهم کند.
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Img src="/images/capabilities/2.png"></Img>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    height: { xs: "437px", md: "483px" },
                    width: "65%",
                    backgroundColor: "rgba(239, 245, 255, 0.9)",
                    position: "absolute",
                    borderTopLeftRadius: "85px",
                    borderBottomLeftRadius: "85px",
                    top: { xs: 1526, md: 2300 },
                    right: 0,
                    zIndex: -1,
                  }}
                />

                <Grid container item alignItems="center" spacing={{ sm: 2 }}>
                  <Grid item sm={6}>
                    <Img src="/images/capabilities/3.png"></Img>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="h6">پشتیبانی از کار تیمی </Typography>
                    <Typography variant="body2" color={"GrayText"} mt={2}>
                      افراد مختلف را به فضای کاری خود اضافه کنید و برای تدوین هر
                      مدل تیم کاری تشکیل دهید. همسو امکان کار اشتراکی بر روی مدل
                      های فرایندی با سطوح دسترسی مشخص را فراهم آورده است.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  container
                  item
                  direction={{ xs: "column-reverse", sm: "row" }}
                  alignItems="center"
                  spacing={{ sm: 2 }}
                >
                  <Grid item sm={6}>
                    <Typography variant="h6">چرخه بهبود مستمر</Typography>
                    <Typography variant="body2" color={"GrayText"} mt={2}>
                      ابتدا وضعیت موجود فرایند خود را مدل کنید و با استفاده از
                      امکانات تحلیلی ابزار، نقاط قابل بهبود را شناسایی کرده و
                      سپس وضعیت مطلوب را ترسیم نمایید. با عملیاتی شدن وضعیت
                      مطلوب فرایند در سازمان، مدل مطلوب با مدل موجود جایگزین
                      می‌گردد. همسو تاریخچه همه تغییرات در طول زمان را برای شما
                      نگهداری و امکان مقایسه مدل ها و مشاهده تغییرات را فراهم
                      می‌نماید.
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Img src="/images/capabilities/4.png"></Img>
                  </Grid>
                </Grid>

                <Grid container item alignItems="center" spacing={{ sm: 2 }}>
                  <Grid item sm={6}>
                    <Img src="/images/capabilities/5.png"></Img>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="h6">شناسنامه فرایند</Typography>
                    <Typography variant="body2" color={"GrayText"} mt={2}>
                      برای مستندسازی فرایندها به ذخیره اطلاعات بیشتری نیاز
                      دارید؟ در همسو می‌توانید علاوه بر نمودار فرایند، سایر
                      اطلاعات مانند تامین کننده، ورودی، مشتری، خروجی، دستورالعمل
                      و... را نگهداری نمایید. همسو با اعتبارسنجی داده‌های ثبت
                      شده در شناسنامه فرایندها، اعلان‌های لازم در جهت اصلاح
                      مغایرت‌ها را به کاربر می‌دهد که در نهایت منجر به تولید
                      نمودار معتبر و یکپارچه برای مدل های فرایندی خواهد شد.
                    </Typography>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    height: { xs: "437px", md: "554px" },
                    width: "65%",
                    backgroundColor: "rgba(239, 245, 255, 0.9)",
                    position: "absolute",
                    borderTopRightRadius: "85px",
                    borderBottomRightRadius: "85px",
                    top: { xs: 2366, md: 3171 },
                    left: 0,
                    zIndex: -1,
                  }}
                />

                <Grid
                  container
                  item
                  direction={{ xs: "column-reverse", sm: "row" }}
                  alignItems="center"
                  spacing={{ sm: 2 }}
                >
                  <Grid item sm={6}>
                    <Typography variant="h6">چارت سازمانی</Typography>
                    <Typography variant="body2" color={"GrayText"} mt={2}>
                      در همسو می‌توانید بین چارت سازمانی و فرایندها ارتباط ایجاد
                      کنید و در قسمت گزارش‌های تحلیلی، یافته‌های متعددی را به
                      دست آورید: فهرست فرایندهایی که یک فرد در آنها حضور دارند.
                      شرح فعالیت‌های شغل و پست و...
                    </Typography>
                  </Grid>
                  <Grid item sm={6}>
                    <Img src="/images/capabilities/6.png"></Img>
                  </Grid>
                </Grid>

                <Grid container item alignItems="center" spacing={{ sm: 2 }}>
                  <Grid item sm={6}>
                    <Img src="/images/capabilities/7.png"></Img>
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="h6">
                      نظارت بر عملکرد فرآیندها
                    </Typography>
                    <Typography variant="body2" color={"GrayText"} mt={2}>
                      با تدوین شاخص های مناسب می توانید عملکرد فرایند را به صورت
                      مستمر پایش و بر اجرای صحیح فرایند نظارت داشته باشید. علاوه
                      بر پایش دستی شاخص ها ، همسو امکان اتصال به سیستم های
                      اطلاعاتی موجود در سازمان ، و دریافت اتوماتیک مقادیر را
                      دارا می باشد. داشبوردهای نظارتی با ارائه اطلاعات کامل به
                      شناسایی نقاط قابل بهبود کمک می نماید.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* our customers */}
          <Grid
            container
            item
            display={{ xs: "none", md: "block" }}
            order={{ xs: 2, md: 3 }}
          >
            <Box mt={5}>
              <Typography
                mb={2}
                variant="h5"
                fontWeight={800}
                textAlign={"center"}
              >
                مشتری‌ها
              </Typography>
              <Grid container item justifyContent="center" spacing={2}>
                <Grid item md={3} sm={4} xs={12}>
                  <Paper
                    sx={{
                      backgroundColor: "#F5F5F5",
                      paddingY: theme.spacing(1),
                      textAlign: "center",
                    }}
                  >
                    <img
                      alt="customer1"
                      height="70px"
                      src="/images/customers/1.svg"
                    />
                  </Paper>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                  <Paper
                    sx={{
                      backgroundColor: "#F5F5F5",
                      paddingY: theme.spacing(1),
                      textAlign: "center",
                    }}
                  >
                    <img
                      alt="customer2"
                      height="70px"
                      src="/images/customers/2.svg"
                    />
                  </Paper>
                </Grid>
                <Grid item md={3} sm={4} xs={12}>
                  <Paper
                    sx={{
                      backgroundColor: "#F5F5F5",
                      paddingY: theme.spacing(1),
                      textAlign: "center",
                    }}
                  >
                    <img
                      alt="customer3"
                      height="70px"
                      src="/images/customers/3.svg"
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        mt={6}
        sx={{
          backgroundColor: "rgba(239, 245, 255, 0.9)",
        }}
      >
        <Container>
          <Box py={4}>
            <Typography
              mb={2}
              variant="h5"
              fontWeight={800}
              textAlign={"center"}
            >
              معرفی همسو
            </Typography>
            <Box
              p={2}
              sx={{
                backgroundImage: "url('/images/video-background.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            >
              <Grid container justifyContent={"center"}>
                <Grid item md={7} xs={12}>
                  <div className="h_iframe-aparat_embed_frame">
                    <span
                      style={{ display: "block", paddingTop: "57%" }}
                    ></span>
                    <iframe
                      src="https://www.aparat.com/video/video/embed/videohash/O81P2/vt/frame"
                      allowFullScreen="true"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                    ></iframe>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box py={5}>
            <Typography
              mb={2}
              variant="h5"
              fontWeight={800}
              textAlign={"center"}
            >
              سوالات متداول
            </Typography>
            <LandingAccordion items={accordion} />
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
