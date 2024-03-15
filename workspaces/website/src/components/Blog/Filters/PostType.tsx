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
          key={postType.value}
          href={buttonHref?.(postType.value)}
          leftIcon={postType.icon}
          onClick={() => onClickType?.(postType.value)}
          padding={{
            base: '14px 12px',
            md: '14px 24px'
          }}
          sx={{
            alignSelf: 'end',
            fontWeight: 'bold',
            fontSize: '14px',
            height: 'min-content !important',
            borderRadius: '40px',
            lineHeight: '16px',
            marginLeft: '0px !important',
            _dark:{
              background: (currentPostType === postType.value) ? '#70AAFF' : '#1b1b1b',
              color: currentPostType === postType.value ? '#1b1b1b' : '#fff',
              _hover: {
                background: (currentPostType === postType.value) ? '#70AAFF' : '#1b1b1b',
                color: currentPostType === postType.value ? '#1b1b1b' : '#fff',
              }
            },
            ...!(currentPostType === postType.value) && {
              border: '1px solid rgba(35, 25, 45, 0.1)',
              background: 'rgba(72, 38, 72, 0.06)',
              color: 'heading-navy-fg'
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
