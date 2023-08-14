import { HStack, Skeleton, Stack } from "@chakra-ui/react";

const SkeletonGenre = () => {
  return (
    <>
      <Stack padding={"20px"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]?.map((ele) => (
          <HStack key={ele}>
            <Skeleton height="40px" width="50px" borderRadius="12px" />
            <Skeleton height="20px" width="100%" />
          </HStack>
        ))}
      </Stack>
    </>
  );
};

export default SkeletonGenre;
