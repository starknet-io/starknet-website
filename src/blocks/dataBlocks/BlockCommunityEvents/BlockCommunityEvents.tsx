import {
  AutoProps,
  BlockCommunityEventsList,
} from "./(components)/BlockCommunityEventsList";

export function BlockCommunityEvents(props: AutoProps): JSX.Element {
  return (
    <>
      <BlockCommunityEventsList {...props} env={props.env} />
    </>
  );
}
