import { PageStyle } from "../../assets/styles/global";
import GuideBanner from "./guideBanner";
import InputInfoStep from "./inputInfoStep";

export default function CreateHackerHousePage() {
  return (
    <PageStyle>
      <GuideBanner />
      <InputInfoStep />
    </PageStyle>
  );
}
