import HomePageClient from "../components/HomePageClient";
import { getServiceGroups } from "../lib/services";

export default async function Home() {
  const serviceGroups = await getServiceGroups();

  return <HomePageClient serviceGroups={serviceGroups} />;
}
