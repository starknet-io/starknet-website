/**
 * Module dependencies
 */

import { Button } from "@ui/Button";
import { ButtonGroup, ButtonGroupProps} from "@chakra-ui/react";
import { HiFilm, HiOutlineBookOpen, HiPlay } from "react-icons/hi2";

/**
 * `Props` type.
 */

type Props = ButtonGroupProps & {
  currentPostType?: string;
  onClickType?: (type: string) => void;
  buttonHref?: (postType: string) => string;
}
/**
 * `postTypes` constant.
 */

const postTypes = [
  {
    value: 'article',
    label: 'Articles',
    icon: <HiOutlineBookOpen />
  },
  {
    value: 'video',
    label: 'Videos',
    icon: <HiFilm />
  },
  {
    value: 'audio',
    label: 'Audios',
    icon: <HiPlay />
  }
]

/**
 * Export `PostTypeFilter` component.
 */

export const PostTypeFilter = ({
  currentPostType,
  onClickType,
  buttonHref,
  ...props
}: Props) => {
  return (
    <ButtonGroup {...props}>
      {postTypes.map((postType) => (
        <Button
          href={buttonHref?.(postType.value)}
          leftIcon={postType.icon}
          onClick={() => onClickType?.(postType.value)}
          sx={{
            fontWeight: 'bold',
            fontSize: '14px',
            padding: '14px 24px',
            borderRadius: '40px',
            ...!(currentPostType === postType.value) && {
                border: '1px solid rgba(35, 25, 45, 0.1)',
                background: 'rgba(72, 38, 72, 0.06)',
                color: 'heading-navy-fg'
              },
              _dark:{
                background: '#70AAFF,'
              }
          }}
          variant={currentPostType === postType.value ? 'solid' : 'outlineRounded'}
          {...buttonHref && {
            as: 'a'
          }}
        >
          {postType.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}
