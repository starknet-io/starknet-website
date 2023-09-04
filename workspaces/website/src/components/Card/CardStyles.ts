export const CardStyle = {
  background: "surface.card",
  height: "100%",
};
export const LargeCardLayout = {
  display: "flex",
  padding: { base: "32px", md: "120px 40px", lg: "80px" },
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  gap: { base: "40px", lg: "80px" },
  flex: "1 0 0",
  flexWrap: "wrap",
  flexDirection: "column",
  ...CardStyle,
  background: "surface.bg-page",
};
export const LargeCardImgLayout = {
  maxWidth: { base: "100%", lg: "354px" },
  maxHeight: "400px",
};
export const LargeCardBodyLayout = {
  display: "flex",
  minWidth: "164px",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1 0 0",
};
export const LargeCardHorizontalBodyLayout = {
  display: "flex",
  minWidth: "164px",
  maxWidth: "460px",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: "1 0 0",
};
export const LargeCardHorizontalLayout = {
  display: "flex",
  padding: { base: "24px", md: "120px 40px", lg: "80px" },
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  gap: "80px",
  flex: "1 0 0",
  flexWrap: "wrap",
  flexDirection: { base: "column", md: "row" },
  ...CardStyle,
};
export const IconLinkCardLayout = {
  display: "flex",
  padding: { base: "40px 24px", lg: "40px" },
  flexDirection: "column",
  alignItems: "flex-start",
  alignContent: "flex-start",
  gap: "32px 32px",
  flex: "1 0 0",
  flexWrap: "wrap",
  ...CardStyle,
};
export const IconLinkCardBodyLayout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "20px",
  alignSelf: "stretch",
  ...CardStyle,
};
export const IconLinkCardLinkLayout = {
  display: "flex",
  padding: "4px 0px",
  alignItems: "center",
  gap: "4px",
};
export const GridCardLayout = {
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  flex: 2,
  flexWrap: "wrap",
  borderColor: "transparent",
  ...CardStyle,
};
export const GridCardImgLayout = {
  width: "100%",
  minHeight: 225,
  maxHeight: 225,
  objectFit: "cover",
  position: "absolute",
  top: "0",
  left: "0",
  height: { base: "16rem", md: "12rem", lg: "10rem" },
};
export const GridCardBodyLayout = {
  display: "flex",
  minWidth: "164px",
  width: "100%",
  padding: { base: "24px", lg: "40px" },
  alignItems: "flex-start",
  flex: "1 0 0",
  flexDirection: "column",
  bg: "surface.bg-page",
};
export const AssetCardLayout = {
  display: "flex",
  padding: "xl",
  alignItems: "center",
  alignContent: "center",
  gap: "24px 24px",
  flex: "1 0 0",
  alignSelf: "stretch",
  flexWrap: "wrap",
  flexDirection: "column",
  ...CardStyle,
};
export const AssetCardHorizontalLayout = {
  display: "flex",
  padding: "24px",
  alignItems: "center",
  alignContent: "center",
  gap: "24px 24px",
  flex: "1 0 0",
  alignSelf: "stretch",
  flexWrap: "wrap",
};
export const AssetCardTitleLayout = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
export const AssetCardImgLayout = {
  borderRadius: "16px",
  width: "80px",
  height: "80px",
  boxShadow:
    "3px 5px 12px 0px rgba(0, 0, 0, 0.12), 20px 20px 32px 0px rgba(0, 0, 0, 0.20)",
};
export const AssetCardBodyLayout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "base",
  alignSelf: "stretch",
  flex: 1,
};
export const AssetCardImgHorizontalLayout = {
  borderRadius: "16px",
  boxShadow:
    "3px 5px 12px 0px rgba(0, 0, 0, 0.12), 20px 20px 32px 0px rgba(0, 0, 0, 0.20)",
};
