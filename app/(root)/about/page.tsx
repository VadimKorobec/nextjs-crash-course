const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <section>
      <h1 className=" text-3xl">About Page</h1>
    </section>
  );
};

export default AboutPage;
