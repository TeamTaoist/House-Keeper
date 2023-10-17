import styled from "@emotion/styled";
import { useState } from "react";
import FormModal from "../components/formModal";

export default function ApplyPage() {
  const [showForm, setShowForm] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const handleCloseForm = () => {
    // TODO: check apply result
    setOpenCalendar(true);
    setShowForm(false);
  };
  return (
    <Page>
      <section>
        <button onClick={() => setShowForm(true)}>申请</button>
      </section>
      {openCalendar && (
        <section>
          <h5>预约时间</h5>
        </section>
      )}
      {showForm && <FormModal show={showForm} handleClose={handleCloseForm} />}
    </Page>
  );
}

const Page = styled.div`
  padding: 40px;
`;
