import Image from "next/image";

const SectionData = ({ imgSrc, texth1, texth3 }) => {
  return (
    <section className="justify-between py-2 font-bold bg-boxColor rounded-xl">
      <Image src={imgSrc} />
      <h1 className="text-1xl">{texth1}</h1>
      <h3>{texth3}</h3>
    </section>
  );
};

export default SectionData;
