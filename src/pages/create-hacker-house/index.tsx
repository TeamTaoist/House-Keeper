import { useState } from "react";
import { PageStyle } from "../../assets/styles/global";
import GuideBanner from "./guideBanner";
import InputInfoStep from "./inputInfoStep";
import ChooseTemplateStep from "./chooseTemplateStep";
import SetCalendarStep from "./setCalendarStep";
import { useNavigate } from "react-router-dom";

export default function CreateHackerHousePage() {
  const navigator = useNavigate();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleCreate = () => {
    // TODO
    navigator("/hacker-house/info/1");
  };
  return (
    <PageStyle>
      {
        [
          <>
            <GuideBanner />
            <InputInfoStep onNext={handleNext} />
          </>,
          <ChooseTemplateStep onNext={handleNext} />,
          <SetCalendarStep onCreate={handleCreate} />,
        ][step - 1]
      }
    </PageStyle>
  );
}
