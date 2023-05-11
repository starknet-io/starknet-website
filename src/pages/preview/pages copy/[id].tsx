import { GetServerSideProps } from 'next';
import getContent from '../../api/getContent'; // Import the function to get content by ID

const RedirectToSlug: React.FC = () => {
  return null; // This component doesn't render anything because it's a server-side redirect
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (!id || typeof id !== 'string') {
    return {
      notFound: true,
    };
  }

  try {
    // Fetch the page data by ID
    const pageData = await getContent(id, "en"); // Replace this with the appropriate function to get content by ID in your project

    // Extract the slug from the page data
    const slug = pageData.slug; // Replace this with the correct property to get the slug in your project

    // Perform a server-side redirect to the page with the slug
    return {
      redirect: {
        destination: `/posts/${slug}`,
        permanent: false,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default RedirectToSlug;