export default function handler(req, res) {
  console.log("hello from API");
  res.status(200).json({ name: "John Doe" });
}
