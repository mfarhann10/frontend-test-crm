import { ReviewCard } from "./ui/reviewCard";

export const Review = () => {
  const review = [
    {
      description: "“The place is nice with a village atmosphere surrounded by trees, really cool”",
      image: "https://avatar.iran.liara.run/public",
      name: "Phillip Press",
      profession: "Traveller"
    },
    {
      description: "“The rooms are okay, the breakfast is okay, new and traditional menus are added”",
      image: "https://avatar.iran.liara.run/public",
      name: "Tatiana Levin",
      profession: "Travel Bloger"
    },
    {
      description: "“strategic location, very pleasant at this villa. next time will come back again to spend the night here”",
      image: "https://avatar.iran.liara.run/public",
      name: "Tatiana Levin",
      profession: "Travel Bloger"
    },
  ];

  return (
    <section id="review" className="mx-auto py-12">
      <h1 className="font-poppins font-semibold text-[32px] md:text-[40px] leading-[36px] md:leading-[44px] tracking-[-0.023em] text-[#0A0A0A] mb-12">
        What Our <span className="text-[#106A64]">Customer </span>
        Are Saying
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-35 place-items-center">
        {review.map((item, idx) => (
          <ReviewCard
            key={idx}
            description={item.description}
            image={item.image}
            name={item.name}
            profession={item.profession}
          />
        ))}
      </div>
    </section>
  );
};
