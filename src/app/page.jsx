import Hero from "@/sections/Hero";
import Reservation from "@/sections/Reservation";
import DocsAPresenter from "@/sections/DocsAPresenter";
import TransfertAeroport from "@/sections/TransfertAeroport";
import ZoneDeplacement from "@/sections/ZoneDeplacement";
import ReservastionForm from "@/sections/ReservastionForm";
import Infos from "@/components/Infos";

export default function Home() {
  return (
    <>
      <Hero />
      <Reservation />
      <DocsAPresenter />
      <ZoneDeplacement />
      <ReservastionForm />
      <TransfertAeroport />
      <Infos />
    </>
  );
}
