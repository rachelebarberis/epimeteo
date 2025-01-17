const ImgHeader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        overflow: "hidden",
      }}
    >
      <img
        src="./public/images/headerimg.jpg"
        alt="mondo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
    </div>
  );
};
export default ImgHeader;
