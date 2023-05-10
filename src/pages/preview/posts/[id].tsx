import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import getContent from '../getContent'; // This will be a new file where you'll fetch the draft content from the repo.

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface IPost {
  title: string;
  body: string;
}

interface IPostProps {
  post: IPost;
}

const PostPreview = ({ post }: IPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;
  const post = await getContent(id, "en");
  return {
    props: {
      post,
    },
  };
};

export default PostPreview;