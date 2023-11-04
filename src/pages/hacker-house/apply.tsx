import { PageStyle } from "../../assets/styles/global";
import ManageHouseItem from "../../components/house-card-item/manage-house";

import FormComp from "../../components/apply/form";
import CalledarComp from "../../components/apply/callerdar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";

export default function HackerHouseApplyPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [step, setStep] = useState(1);

  const checkSubmitFromBackend = () => {
    // TODO
  };

  useEffect(() => {
    checkSubmitFromBackend();
  }, []);

  const handleSubmitCallback = () => {
    setStep(2);
  };

  const handleApplyCallback = () => {
    // TODO: notify backend
    navigate(`/hacker-house/${id}`);
  };

  return (
    <PageStyle>
      <ManageHouseItem />
      <ApplyBox>
        {step === 1 && <FormComp handleSubmitCallback={handleSubmitCallback} />}
        {step === 2 && <CalledarComp onSuccess={handleApplyCallback} />}
      </ApplyBox>
    </PageStyle>
  );
}

const ApplyBox = styled.div`
  margin-block: 40px;
  padding: 20px;
  background-color: #fff;
  text-align: center;
`