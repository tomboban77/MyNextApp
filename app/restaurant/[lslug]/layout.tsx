import Header from "./components/Header";

export default function RestaurantLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params:{lslug:string}
}) {
  return (
    <main>
      <Header  name={params.lslug}/>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
