interface UserPageProps {
  params: Promise<{ id: string }>;
}

const UserPage = async ({ params }: UserPageProps) => {
  const { id } = await params;

  return (
    <section>
      <h1 className=" text-3xl">User Page {id}</h1>
    </section>
  );
};

export default UserPage;
