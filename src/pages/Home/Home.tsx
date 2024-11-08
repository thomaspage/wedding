import { Typography } from "@mui/material";
import {
  ScheduleContainer,
  HomeContainer,
  Place,
  Time,
  Title,
} from "./Home.styles";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Home = ({}) => {
  const { t } = useTranslation();

  useEffect(() => {
    
    fetch("https://gamification.prv-use1.dev-pure.cloud/api/v2/insights/performance-summary?endWorkday=2024-02-01&startWorkday=2024-01-01&userIds=c4a4c399-c581-4f9c-bf4a-8dfdb1d527d4", {
        "cache": "default",
      "credentials": "omit",
      "headers": {
          "Accept": "application/json",
          "ININ-Organization-Id": "945b2624-2611-4fdc-b86e-f2160be7b767",
      },
      "method": "GET",
      // "mode": "cors",
      "redirect": "follow",
  })
  }, []);

  return (
    <HomeContainer>
      <Title variant="h1">
        Max & Tom
        <br />
        {t("pages.home.title.2")}
        <br />
        {t("pages.home.title.3")}
        <br />
        {t("pages.home.title.4")}
      </Title>

      <ScheduleContainer>
        <Time>
          <Typography variant="h3">{t("pages.home.day")}</Typography>
          <Typography variant="h3">{t("pages.home.date")}</Typography>
          <Typography variant="h3">{t("pages.home.time")}</Typography>
        </Time>
        <Place>
          <Typography variant="h3">{t("pages.home.place")}</Typography>
          <Typography variant="h3">{t("pages.home.address")}</Typography>
          <Typography variant="h3">{t("pages.home.city")}</Typography>
        </Place>
      </ScheduleContainer>

      <Typography fontFamily="Ballantines" variant="h4">
        {t("pages.home.dancing")}
      </Typography>
    </HomeContainer>
  );
};

export default Home;
