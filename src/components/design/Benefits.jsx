export const GradientLight = () => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-1/4 w-full aspect-square"
      style={{
        background: "radial-gradient(circle,rgb(108, 50, 32) 0%, rgba(40,32,108,0) 70%)",
      }}
    />
  );
};
