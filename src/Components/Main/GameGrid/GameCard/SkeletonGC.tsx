import { Card, CardBody, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";

const SkeletonGC = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={5}
        padding={"10px"}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((ele) => (
          <Card
            borderRadius={"10px"}
            overflow={"hidden"}
            width={"100%"}
            key={ele}
          >
            <Stack>
              <Skeleton height={"200px"} width={"100%"} />
              <CardBody width={"100%"}>
                <Stack gap={3}>
                  <Skeleton height="20px" width={"100%"} />
                  <Skeleton height="20px" width={"100%"} />
                  <Skeleton height="20px" width={"100%"} />
                </Stack>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SkeletonGC;
