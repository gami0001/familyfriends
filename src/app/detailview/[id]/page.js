import Image from "next/image";
import Tags from "@/components/Tags";
import Text from "@/components/Text";
import { Suspense } from "react";

const DetailView = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breed = await response.json();

  return (
    <div>
      <Image src={breed.image.url} alt="Picture of the animal" width={300} height={200} className="rounded-xl object-cover" />
      <h1>{breed.name}</h1>
      <Tags tags={breed.temperament} />
      <Text breedDescription={breed.description} breedHistory={breed.history} />
    </div>
  );
};

export default DetailView;
