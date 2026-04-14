import Dog from "./Dog";

const Card = () => {
  return <FetchBreed />;
};

const FetchBreed = async () => {
  "use server";
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const breeds = await response.json();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {breeds.map((breed) => {
        return <Dog key={breed.id} breedGroup={breed.breed_group} origin={breed.origin} image={breed.image?.url} />;
      })}
    </div>
  );
};

export default Card;
