import SideNav from "@/components/sideNav";

export default function sideNavLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-1 mt-8 flex  flex-row  sm:mx-10 sm:gap-4 lg:mx-20 lg:my-16 lg:gap-10">
      <SideNav />
      {children}
    </section>
  );
}
