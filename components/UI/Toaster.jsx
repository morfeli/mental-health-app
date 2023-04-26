// import * as React from "react";
// import * as Toast from "@radix-ui/react-toast";

// const ToastDemo = () => {
//   const [open, setOpen] = React.useState(false);
//   const eventDateRef = React.useRef(new Date());
//   const timerRef = React.useRef(0);

//   React.useEffect(() => {
//     return () => clearTimeout(timerRef.current);
//   }, []);

//   return (
//     <Toast.Provider swipeDirection="right">
//       <button
//         className="Button large violet"
//         onClick={() => {
//           setOpen(false);
//           window.clearTimeout(timerRef.current);
//           timerRef.current = window.setTimeout(() => {
//             eventDateRef.current = oneWeekAway();
//             setOpen(true);
//           }, 100);
//         }}
//       >
//         Add to calendar
//       </button>

//       <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
//         <Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
//         <Toast.Description asChild>
//           <time
//             className="ToastDescription"
//             dateTime={eventDateRef.current.toISOString()}
//           >
//             {prettyDate(eventDateRef.current)}
//           </time>
//         </Toast.Description>
//         <Toast.Action
//           className="ToastAction"
//           asChild
//           altText="Goto schedule to undo"
//         >
//           <button className="Button small green">Undo</button>
//         </Toast.Action>
//       </Toast.Root>
//       <Toast.Viewport className="ToastViewport" />
//     </Toast.Provider>
//   );
// };

// function oneWeekAway(date) {
//   const now = new Date();
//   const inOneWeek = now.setDate(now.getDate() + 7);
//   return new Date(inOneWeek);
// }

// function prettyDate(date) {
//   return new Intl.DateTimeFormat("en-US", {
//     dateStyle: "full",
//     timeStyle: "short",
//   }).format(date);
// }

// export default ToastDemo;

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "../UI/Toast";
import { useToast } from "../helper-functions/useToast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider duration={2000} swipeDirection="left">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-white ToastRoot">
            <div className="grid gap-1">
              {title && <ToastTitle className="">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport className="ToastViewport" />
    </ToastProvider>
  );
}
