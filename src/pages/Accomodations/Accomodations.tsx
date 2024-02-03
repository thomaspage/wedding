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

const Accomodations = ({}) => {
  return (
    <AccomodationsContainer>
      <Typography>We have not reserved a block of rooms, so feel free to stay wherever you'd like! Whether you find a killer AirBnb in Le Plateau or a beautiful hotel in Vieux-Montréal, the venue is a short 5 minute walk from the McGill metro station on the green line. If you would rather stay close to the venue, some nearby hotel options can be found below.</Typography>

      <Hotels>
      <Hotel>
        <Link to="https://hotelbirksmontreal.com/" target="blank">
          <HotelName>Hotel Birks</HotelName>
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
