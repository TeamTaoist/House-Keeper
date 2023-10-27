import styled from "@emotion/styled";
import { useState } from "react";
import FormModal from "../components/formModal";
import CalModal from "../components/calModal";

export default function ApplyPage() {
  const [showForm, setShowForm] = useState(false);
    const [openCalendar, setOpenCalendar] = useState(true);
    const [showCalendar, setShowCalendar] = useState(false);

  const handleCloseForm = () => {
    // TODO: check apply result
    setOpenCalendar(true);
    setShowForm(false);
  };
  const handleCloseCal = () => {
    setShowCalendar(false);
  };
  return (
    <Page>
      <section>
        <button onClick={() => setShowForm(true)}>申请</button>
      </section>
      {openCalendar && (
        <section>
          <button onClick={() => setShowCalendar(true)}>预约时间</button>
        </section>
      )}
      {showCalendar && (
        <CalModal show={showCalendar} handleClose={handleCloseCal} />
      )}
      {showForm && <FormModal show={showForm} handleClose={handleCloseForm} />}
    </Page>
  );
}

const Page = styled.div`
  padding: 40px;
`;
