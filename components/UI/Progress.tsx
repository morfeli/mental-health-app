import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import classNames from "classnames";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={classNames(
      "relative h-8 w-[350px] mx-auto overflow-hidden rounded-full bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",
      className
    )}
    {...props}
  >
    <h2 className="absolute text-2xl z-50  right-[45%]">{value}%</h2>
    <ProgressPrimitive.Indicator
      className="w-full h-full transition-all bg-[#00b4d8]"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
