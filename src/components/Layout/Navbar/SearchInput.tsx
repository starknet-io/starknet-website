import {
  Button,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from "src/libs/chakra-ui";
import * as React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { Text } from "../../Typography/Text";
//@ts-ignore
export const SearchInput = ({ searchArea }: React.ReactElement) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const OverlayOne = () => (
  //   <ModalOverlay bg="blackAlpha.100" backdropFilter="blur(7px)" />
  // );

  // if (!isDesktop) {
  //   return (
  //     <IconButton
  //       variant="ghost"
  //       icon={<Icon as={HiOutlineMagnifyingGlass} fontSize="xl" />}
  //       aria-label="Open Menu"
  //     />
  //   );
  // }
  return (
    <>
      {searchArea}
      {/* <InputGroup>
        <InputLeftElement top="3px">
          <Icon as={HiOutlineMagnifyingGlass} fontSize="lg" />
        </InputLeftElement>
        <Input
          variant="search"
          width="full"
          fontSize="sm"
          type="text"
          placeholder="Search"
          autoComplete="off"
          onClick={() => onOpen()}
        />
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <OverlayOne />
          <ModalContent bg="card-bg">
            <ModalBody>
              <Text>Algolia search</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <InputRightElement right="43px" top="3px">
          <Kbd variant="search" size="md">
            /
          </Kbd>
        </InputRightElement>
      </InputGroup> */}
    </>
  );
};
