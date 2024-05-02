import { Typography } from "@mui/material";
import {
  RegistryContainer,
} from "./Registry.styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as amplitude from "@amplitude/analytics-browser";
import { useEffect, useState } from "react";

const Accomodations = ({}) => {
  const { t } = useTranslation();
  const [style, setStyle] = useState({height: "10000px !important"})

  // useEffect(() => {
  //   const iframe = document.getElementById("myregsitry_embeded_iframe")

  //   const styleAttributes = iframe?.getAttribute("style")?.split?.(";")

  //   const newStyle: {[key: string]: any}  = {}

  //   styleAttributes?.forEach(attribute => {
  //     const attributeSplit = attribute.split(":")
  //     const attributeName = attributeSplit[0]?.trim()
  //     const attributeValue = attributeSplit[1]?.trim()
  //     newStyle[attributeName] = attributeValue
  //   })

  //   setStyle(newStyle)

  // }, [])

  return (
    <RegistryContainer>
      <iframe id="registry_iframe" src="https://www.myregistry.com/ExternalApps/EmbededVistorView/v2/Visitors/GiftList.aspx?registryId=4263848&amp;pageSize=10000" frameBorder="0"></iframe>
    </RegistryContainer>
  );
};

export default Accomodations;
