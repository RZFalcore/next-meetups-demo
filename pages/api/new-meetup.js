const handler = (req, res) => {
  if (req.method !== "POST") return;

  const { title, image, address, description } = req.body.data;
  console.log("Data: ", title, image, address, description);
};

export default handler;
