export default function LiveRadioPlayer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#dd9d71a1",
        padding: "8px",
        borderRadius: "12px",
        width: "100%"
      }}
    >
      <audio
        controls
        src="https://stream.zeno.fm/pu0k9npecjfuv.mp3"
        style={{ width: "100%" }}
      />
    </div>
  );
}
