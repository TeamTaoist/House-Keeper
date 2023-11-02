import { useEffect } from "react";

interface SubmissionPayload {
  id: string; // submission ID
  respondentId: string;
  formId: string;
  formName: string;
  createdAt: Date; // submission date
  fields: Array<{
    id: string;
    title: string;
    type:
      | "INPUT_TEXT"
      | "INPUT_NUMBER"
      | "INPUT_EMAIL"
      | "INPUT_PHONE_NUMBER"
      | "INPUT_LINK"
      | "INPUT_DATE"
      | "INPUT_TIME"
      | "TEXTAREA"
      | "MULTIPLE_CHOICE"
      | "DROPDOWN"
      | "CHECKBOXES"
      | "LINEAR_SCALE"
      | "FILE_UPLOAD"
      | "HIDDEN_FIELDS"
      | "CALCULATED_FIELDS"
      | "RATING"
      | "MULTI_SELECT"
      | "MATRIX"
      | "RANKING"
      | "SIGNATURE"
      | "PAYMENT";
    answer: { value: any; raw: any };
  }>;
}

interface IProps {
  handleSubmitCallback: () => void;
}

export default function FormComp({ handleSubmitCallback }: IProps) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.onload = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Tally.loadEmbeds();
    };
    s.type = "text/javascript";
    document.getElementById("root")?.appendChild(s);
  }, []);

  useEffect(() => {
      const fn = (e: any) => {
          console.log(e);
      if (e?.data?.includes("Tally.FormSubmitted")) {
        const payload = JSON.parse(e.data).payload as SubmissionPayload;
        console.log(payload);
        handleSubmitCallback();
      }
    };
    window.addEventListener("message", fn);
    return () => {
      window.removeEventListener("message", fn);
    };
  }, [handleSubmitCallback]);
  return (
    <iframe
      data-tally-src="https://tally.so/embed/3NXLpl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      // data-tally-src="https://tally.so/embed/3joV59?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&wallet=0x111222&name=joanna&userid=abcd"
      loading="lazy"
      width="100%"
      height="200"
      title="JoannaOriginForm"
      style={{ border: "none" }}
    ></iframe>
  );
}
