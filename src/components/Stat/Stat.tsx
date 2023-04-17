import {
  Heading,
  Stack,
  StackProps,
  useBreakpointValue,
} from "src/libs/chakra-ui";

interface StatProps extends StackProps {
  label: string;
  value: string;
}

export const Stat = (props: StatProps) => {
  const { label, value, ...stackProps } = props;
  return (
    <Stack spacing="3" textAlign="center" {...stackProps}>
      <Heading
        size={useBreakpointValue({ base: "lg", md: "xl" })}
        color="accent"
      >
        {value}
      </Heading>
      <Heading variant="h4" fontWeight="medium" color="muted">
        {label}
      </Heading>
    </Stack>
  );
};
