const Texts = ({ breedDescription, breedHistory }) => {
  return (
    <div>
      <p>Breed description</p>
      <p>{breedDescription}</p>
      <p>Breed history</p>
      <p>{breedHistory}</p>
    </div>
  );
};

export default Texts;
