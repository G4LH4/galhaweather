import Image from "next/image";

const SectionData = ({ imgSrc, texth1, texth3 }) => {
  return (
    <section className="justify-between space-y-1 font-bold rounded-xl">
      <Image src={imgSrc} />
      <h1 className="text-sm">{texth1}</h1>
      <h3 className="tracking-wide opacity-60">{texth3}</h3>
    </section>
  );
};

export default SectionData;
