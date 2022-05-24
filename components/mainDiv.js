const MainDiv = ({ id, addClass, props }) => {
  return (
    <div id={id} className={`p-5 mx-auto space-y-12 font-semibold ${addClass}`}>
      {props}
    </div>
  );
};

export default MainDiv;
