import React from "react";

type LayoutProviderProps = {
  children: React.ReactNode;
};
type Props = {
  page: JSX.Element;
  layout: React.FC<LayoutProviderProps>;
};

const PublicRoute = (props: Props) => {
  const { page: Page, layout: Layout } = props;
  return <Layout>{Page}</Layout>;
};

export default PublicRoute;
