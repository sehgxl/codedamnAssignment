import SideNav from "@/components/sideNav";

export default function sideNavLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-24 my-16 flex flex-row gap-20">
      <SideNav />
      {children}
    </section>
  );
}
