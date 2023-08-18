import { defineStyleConfig } from "@chakra-ui/react";

export const CardStyle = {
  background: "#FBFBFB"
}
export const CardStyleWhite = {
  background: "#FFFFFF"
}
export const LargeCardLayout = {
  display: "flex",
  padding: { base: "24px", lg: "40px" },
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  gap: "32px 32px",
  flex: "1 0 0",
  flexWrap: "wrap",
  flexDirection: {base: "column-reverse", md: "column"},
  ...CardStyle
}
export const LargeCardHorizontalLayout = {
  display: "flex",
  padding: "24px",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  gap: "16px 16px",
  flex: "1 0 0",
  flexWrap: "wrap",
  flexDirection: {base: "column-reverse", md: "row"},
  ...CardStyle
}
export const IconLinkCardLayout = {
  display: "flex",
  padding: { base: "24px", lg: "48px 40px 40px 40px" },
  flexDirection: "column",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "32px 32px",
  flex: "1 0 0",
  flexWrap: "wrap",
  height: "100%",
  ...CardStyle
}
export const IconLinkCardBodyLayout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
  alignSelf: "stretch",
  ...CardStyle
}
export const IconLinkCardLinkLayout = {
  display: "flex",
  padding: "4px 0px",
  alignItems: "center",
  gap: "4px"
}
export const GridCardLayout = {
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  flex: "1 0 0",
  flexWrap: "wrap",
  borderRadius: "16px",
  ...CardStyle
}
export const GridCardImgLayout = {
  width: "100%"
}
export const GridCardBodyLayout = {
  display: "flex",
  minWidth: "164px",
  width: "100%",
  padding: { base: "24px", lg: "40px" },
  alignItems: "flex-start",
  flex: "1 0 0",
  flexDirection: "column",
  gap: "20px"
}
export const AssetCardLayout = {
  display: "flex",
  padding: "24px",
  alignItems: "center",
  alignContent: "center",
  gap: "24px 24px",
  flex: "1 0 0",
  alignSelf: "stretch",
  flexWrap: "wrap",
  flexDirection: "column",
  ...CardStyleWhite
}
export const AssetCardHorizontalLayout = {
  display: "flex",
  padding: "24px",
  alignItems: "center",
  alignContent: "center",
  gap: "24px 24px",
  flex: "1 0 0",
  alignSelf: "stretch",
  flexWrap: "wrap",
  ...CardStyleWhite
}
export const AssetCardTitleLayout = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
}
export const AssetCardImgLayout = {
  borderRadius: "12px",
  width: "100%"
}
export const AssetCardBodyLayout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  alignSelf: "stretch",
  flex: 1
}
export const AssetCardImgHorizontalLayout = {
  borderRadius: "12px"
}
