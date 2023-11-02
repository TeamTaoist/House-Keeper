// @ts-ignore
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Calledar({ onSuccess }: { onSuccess: () => void }) {
  useEffect(() => {
    const init = async () => {
      const cal = await getCalApi();
      cal("on", {
        action: "bookingSuccessful",
        //   calLink: "joannazzz/30min",
        callback: (e: { detail: any }) => {
          // `data` is properties for the event.
          // `type` is the name of the action(You can also call it type of the action.) This would be same as "ANY_ACTION_NAME" except when ANY_ACTION_NAME="*" which listens to all the events.
          // `namespace` tells you the Cal namespace for which the event is fired/
          const { data, type, namespace } = e.detail;
          console.log(data, type, namespace);
          toast.success("Successfully booked!");
          onSuccess();
        },
      });
    };
    init();
  }, []);
  return <Cal calLink="joannazzz/30min"></Cal>;
}
