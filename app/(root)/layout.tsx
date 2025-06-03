interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div>
    <h1 className=" text-3xl">ROOT LAYOUT</h1>
    {children}</div>;
};

export default Layout;
