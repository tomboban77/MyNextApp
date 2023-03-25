import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";
import MainMenu from "../components/MainMenu";
import RestaurantNavbar from "../components/RestaurantNavbar";

const prisma = new PrismaClient();
const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    notFound();
  }
  return restaurant.items;
};

export default async function Menu({ params }: { params: { lslug: string } }) {
  const menu = await fetchRestaurantMenu(params.lslug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.lslug} />
        <MainMenu menu={menu} />
      </div>
    </>
  );
}
