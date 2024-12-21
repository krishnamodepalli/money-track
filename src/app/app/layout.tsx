import { ReactNode } from "react";

const Layout = ({
  children,
  history,
}: {
  children: ReactNode;
  history: ReactNode;
}) => {
  return (
    <div className="mt-20 flex justify-between gap-8">
      <div className="w-full">{children}</div>
      <div className="w-full">{history}</div>
    </div>
  );
};

export default Layout;
