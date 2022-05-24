const LocationCards = ({ data }) => {
  return (
    <div id="cards">
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
    </div>
  );
};

const Card = ({ data }) => {
  console.log(data);
  return <div id="card"></div>;
};

export default LocationCards;
