import { queryClient } from "@/pages/_app";
import { wait } from "@/ulties/common";
import React, { ReactElement, useEffect, useRef } from "react";
import { useQuery, useMutation } from "react-query";

export const toast: { message: ReactElement | null } = { message: null };

const Toast = () => {
  const { data } = useQuery("toast", () => toast);

  const timer = useRef<any>();
  const toastMutation = useMutation({
    mutationFn: async () => {
      toast.message = null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("toast");
    },
  });

  useEffect(() => {
    const timeOut = timer.current;
    if (data?.message) {
      wait(3000, timer).then(() => {
        toastMutation.mutate();
      });
    }
    return () => {
      clearTimeout(timeOut);
    };
  });

  return (
    <div
      style={{
        position: "fixed",
        padding: "1em",
        width: "100%",
        maxWidth: "300px",
        bottom: "0",
        right: "0",
      }}
    >
      {data?.message && (
        <div
          style={{
            background: "rgb(229, 239, 236)",
            width: "100%",
            padding: ".5em",
            border: "1px solid",
            borderRadius: "5px",
          }}
        >
          {data.message}
        </div>
      )}
    </div>
  );
};

export default Toast;
