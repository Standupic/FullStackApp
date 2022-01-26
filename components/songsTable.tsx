import {
  Box,
  Table,
  Thead,
  Td,
  Tr,
  Tbody,
  Th,
  IconButton,
} from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ICO } from "image-size/dist/types/ico";

const SongsTable = ({ songs }) => {
  return (
    <Box bg="trasparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            aria-label="play"
            colorScheme="green"
            size="lg"
            isRound
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(225,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </Box>
  );
};

export default SongsTable;
