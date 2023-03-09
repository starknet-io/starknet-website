export const metadata = {
  title: "Video Tutorials",
};

export default function Page() {
  return (
    <div
      style={{
        marginLeft: "2rem",
        maxWidth: 700,
      }}
    >
      <div>
        <h2>Explanation</h2>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            // paddingTop: "30px",
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src={`/video-embed`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <h2>End</h2>
      </div>
    </div>
  );
}
