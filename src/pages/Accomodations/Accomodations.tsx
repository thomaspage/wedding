import { Typography } from "@mui/material";
import {
  AccomodationsContainer,
  Hotel,
  Hotels,
  HotelName,
  InlineFlex,
  MetroImg,
  WalkerImg,
} from "./Accomodations.styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Accomodations = ({}) => {

  const { t } = useTranslation();

  return (
    <AccomodationsContainer>
      <Typography>{t("pages.accomodations.message")}</Typography>

      <Hotels>
      <Hotel>
        <Link to="https://hotelbirksmontreal.com/" target="blank">
          <HotelName>Hôtel Birks</HotelName>
        </Link>
        <InlineFlex>
          <WalkerImg />
          <Typography>2 min</Typography>
        </InlineFlex>
      </Hotel>
      <Hotel>
        <Link
          to="https://www.marriott.com/en-us/hotels/yulmd-renaissance-montreal-downtown-hotel/overview/"
          target="blank"
        >
          <HotelName>Renaissance</HotelName>
        </Link>
        <InlineFlex>
          <WalkerImg />
          <Typography>3 min</Typography>
        </InlineFlex>
      </Hotel>
      <Hotel>
        <Link
          to="https://www.marriott.com/en-us/hotels/yuldt-courtyard-montreal-downtown/overview/"
          target="blank"
        >
          <HotelName>Courtyard Marriott</HotelName>
        </Link>
        <InlineFlex>
          <WalkerImg />
          <Typography>6 min</Typography>
        </InlineFlex>
      </Hotel>
      </Hotels>

      {/* <br />
      <br />

      <Hotel>
        <InlineFlex>
          <Typography variant="h3">McGill Metro</Typography>
          <MetroImg />
        </InlineFlex>
        <InlineFlex>
          <WalkerImg />
          <Typography>5 min</Typography>
        </InlineFlex>
      </Hotel> */}
    </AccomodationsContainer>
  );
};

export default Accomodations;
