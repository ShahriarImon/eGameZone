import { Badge } from "@chakra-ui/layout";

interface props {
  critic: number;
}
const Critics = ({ critic }: props) => {
  const color = critic > 80 ? "lightgreen" : critic > 60 ? "yellow" : "red";
  return (
    <Badge color={color} fontSize={"11pt"}>
      {critic}
    </Badge>
  );
};

export default Critics;
