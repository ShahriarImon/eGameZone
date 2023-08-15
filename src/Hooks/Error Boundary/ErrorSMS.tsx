import { InfoIcon } from "@chakra-ui/icons";

const ErrorMSG = ({ errorPlace }: { errorPlace: string }) => {
  return (
    <h4 style={{ padding: "20px" }}>
      <InfoIcon color="#d90d0d" /> Error in {errorPlace}
    </h4>
  );
};

export default ErrorMSG;
