import { motion } from "framer-motion";

const sphereArray = [1, 2, 3];

export type LayoutProps = {
  children: React.ReactNode;
  status?: string;
};

const LoginPageBlurredOverlay = ({ children }: LayoutProps) => {
  return (
    <div>
      {sphereArray.map((item, i) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: item * 1, duration: 2 }}
            key={i}
            className={`blob-${item} x-${item}`}
          >
            <div className={`blob y-${item}`} />
          </motion.div>
        );
      })}

      {children}
    </div>
  );
};

export default LoginPageBlurredOverlay;
