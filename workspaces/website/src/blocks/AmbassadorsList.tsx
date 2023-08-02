import { useState } from "react";
import { Heading } from "@ui/Typography/Heading";
import { Text } from "@ui/Typography/Text";
import { ArrowLeftIcon } from "../components/Icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../components/Icons/ArrowRightIcon";
import { Badge } from "@ui/Badge";
import {
  Box,
  Flex,
  FlexProps,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Link,
  Icon,
  IconButton,
  Wrap,
  HStack,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import { slugify } from "@starknet-io/cms-utils/src/index";
import { SiDiscord, SiTwitter } from "react-icons/si";
import { HiGlobeAlt } from "react-icons/hi2";

export type AmbassadorsSize = "sm" | "md" | "lg";

export interface Ambassador {
  readonly full_name: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly website?: string;
  readonly twitter?: string;
  readonly discord?: string;
  readonly tags?: Tag[];
}

type Tag = {
  tag: string;
}

type RootProps = {
  title?: string;
  ambassador?: Ambassador[];
} & FlexProps;

const AmbassadorsList = (props: RootProps) => {
  const { ambassador, title, ...rest } = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedMember, setSelectedMember] = useState<Ambassador>();

  const handleClose = () => {
    onClose();
  };

  const viewMember = (member: Ambassador) => {
    setSelectedMember(member);
    onOpen();
  };

  const changeMember = (navigator: number) => {
    let index = ambassador?.findIndex(a => a.full_name == selectedMember?.full_name) ?? 0;
    let nextAmbassador = selectedMember;
    if(index !== -1 && ambassador) {
      if ((navigator > 0 && index < ambassador.length - 1) || (navigator < 0 && index > 0)) {
        nextAmbassador = ambassador[index + navigator];
      }
    }
    setSelectedMember(nextAmbassador);
  };

  return (
    <Box mb="64px">
      {title && (
        <Heading
          variant="h3"
          color="councils-title-fg"
          id={`toc-${slugify(title)}`}
          marginBottom="24px"
          lineHeight="150%"
          borderBottom="1px solid #DEDEDE"
        >
          {title}
        </Heading>
      )}
      <Flex
        {...rest}
        overflow="hidden"
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {ambassador?.map(a => {
          return (
            <Flex
              alignItems="center"
              direction="column"
              mt="48px"
              onClick={() => viewMember(a)}
              cursor="pointer"
              px="2"
              maxWidth={{base: "calc(100% - 16px)", md: "calc(50% - 16px)", lg: "calc(33.333333% - 16px)" }}
              width="100%"
              justifyContent="space-between"
            >
              <Flex
                alignItems="center"
                direction="column"
              >
                <Img
                  width="125px"
                  height="125px"
                  src={a.image}
                  title={a.title}
                  objectFit="cover"
                  sx={{ borderRadius: "50%" }}
                  mb="24px"
                  />
                <Heading variant="h4" color="heading-navy-fg">{a.full_name}</Heading>
                <Text align="center" variant="cardBody" color="columnlink-fg">{a.title}</Text>
              </Flex>
              <VStack height="96px">
                {a.tags?.map((t: Tag) => (
                  <Badge mt="2" variant={t.tag === "Content generator" ? "community_and_events" : t.tag === "Event organizer" ? "youtube" : "stark_math"}>{t.tag}</Badge>
                  ))}
              </VStack>
            </Flex>
          )})
        }
        <Modal isOpen={isOpen} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent maxWidth="1100px" width="100%">
            <ModalCloseButton cursor="pointer" zIndex="9" onClick={handleClose} />
            <Flex>
              <Img
                width="auto"
                height="100%"
                src={selectedMember?.image}
                title={selectedMember?.title}
                objectFit="contain"
              />
              <Box
                p="40px 40px 70px 40px"
                position="relative"
                flex="1"
              >
                <Heading variant="h4" color="heading-navy-fg">{selectedMember?.full_name}</Heading>
                <Text variant="cardBody" color="columnlink-fg" mb="2">{selectedMember?.title}</Text>
                <Text variant="cardBody" color="columnlink-fg">{selectedMember?.description}</Text>
                {selectedMember?.tags ? <HStack mt="20px">
                  {selectedMember.tags.map((t: Tag) => (
                    <Badge variant={t.tag === "Content generator" ? "community_and_events" : t.tag === "Event organizer" ? "youtube" : "stark_math"}>{t.tag}</Badge>
                  ))}
                </HStack> : null}
                <Wrap spacingX="24px" shouldWrapChildren mt='20px'>
                  {selectedMember?.website && (
                      <Link
                        isExternal
                        href={`${selectedMember?.website}`}
                      >
                        <Icon
                          boxSize="18px"
                          color="list-card-icon-fg"
                          as={HiGlobeAlt}
                        />
                      </Link>
                    )}
                  {selectedMember?.twitter && (
                    <Link
                      isExternal
                      href={`${selectedMember?.twitter}`}
                    >
                      <Icon
                        boxSize="18px"
                        color="list-card-icon-fg"
                        as={SiTwitter}
                      />
                    </Link>
                  )}
                  {selectedMember?.discord && (
                    <Link
                      isExternal
                      href={`${selectedMember?.discord}`}
                    >
                      <Icon
                        boxSize="18px"
                        color="list-card-icon-fg"
                        as={SiDiscord}
                      />
                    </Link>
                  )}
                </Wrap>
                <Flex
                  position="absolute"
                  bottom="20px"
                  left="calc(50% - 17px)"
                  gap="16px"
                >
                  <IconButton
                    bg="transparent"
                    border="1px solid transparent"
                    color="list-card-icon-fg"
                    icon={<ArrowLeftIcon/>}
                    aria-label="View previous"
                    _hover={{
                      color: "white"
                    }}
                    onClick={() => changeMember(-1)}
                  />
                  <IconButton
                    color="list-card-icon-fg"
                    bg="transparent"
                    border="1px solid transparent"
                    icon={<ArrowRightIcon />}
                    aria-label="View next"
                    _hover={{
                      color: "white"
                    }}
                    onClick={() => changeMember(1)}
                  />
                </Flex>
              </Box>
            </Flex>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export { AmbassadorsList };
