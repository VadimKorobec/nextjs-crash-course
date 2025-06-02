const UserPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);
  return (
    <section>
      <h1 className=" text-3xl">User Page {id}</h1>
    </section>
  );
};

export default UserPage;
