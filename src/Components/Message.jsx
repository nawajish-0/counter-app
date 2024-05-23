export const Message = ({ msg, classname, value = "" }) => {
  const myclassname = `${classname} text-center`; /*javascript string interpolation to mix static and dynamic part*/
  return (
    <h2 className={myclassname}>
      {msg} {value}
    </h2>
  );
};
