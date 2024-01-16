import { HStack } from "@chakra-ui/react";
import { Meta } from "@storybook/react";
import { Footer } from "src/pages/(components)/Footer";
import { ColorModeScript } from "@chakra-ui/react";
import { ColorModeProvider } from "@chakra-ui/color-mode";

export default {
  title: "starknet.io/Footer",
  component: Footer,
} as Meta<typeof Footer>;

export const Solid = () => (
    <ColorModeProvider options={{ useSystemColorMode: true }}>
      <ColorModeScript initialColorMode="light" />
      
        <HStack>
          <Footer
            mainMenu={{
              items: [
                {
                  title: "Learn",
                  columns: [
                    {
                      blocks: [
                        {
                          items: [
                            {
                              page: "93b845d7-5662-4cd4-8c13-3730440880c0",
                              page_data: {
                                id: "93b845d7-5662-4cd4-8c13-3730440880c0",
                                slug: "what-is-starknet",
                                title: "What is Starknet?",
                                template: "content",
                                breadcrumbs: false,
                                link: "/en/learn/what-is-starknet",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                            {
                              page: "1dd72e46-c830-4a44-9bdf-d62b195b4c98",
                              page_data: {
                                id: "1dd72e46-c830-4a44-9bdf-d62b195b4c98",
                                slug: "glossary",
                                title: "Glossary",
                                template: "content",
                                breadcrumbs: false,
                                link: "/en/learn/glossary",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                            {
                              custom_title: "FAQ",
                              page: "b5689d3a-348b-4ccb-b787-520b64c55e41",
                              page_data: {
                                id: "b5689d3a-348b-4ccb-b787-520b64c55e41",
                                slug: "frequently-asked-questions",
                                title: "Frequently asked questions",
                                template: "content",
                                breadcrumbs: false,
                                link: "/en/learn/frequently-asked-questions",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  title: "Developers",
                  columns: [
                    {
                      blocks: [
                        {
                          items: [
                            {
                              custom_title: "Developers Hub",
                              page: "c1050a37-5af0-4277-aabd-b681ffe2cda5",
                              page_data: {
                                id: "c1050a37-5af0-4277-aabd-b681ffe2cda5",
                                slug: "developers",
                                title: "Developers",
                                template: "landing",
                                breadcrumbs: true,
                                link: "/en/developers",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                            {
                              custom_external_link: "https://docs.starknet.io",
                              custom_title: "Documentation",
                            },
                            {
                              custom_internal_link: "/tutorials/",
                              custom_title: "Tutorials",
                            },
                            {
                              page: "4c40a102-df5b-4f39-98fb-774d6841da9e",
                              page_data: {
                                id: "4c40a102-df5b-4f39-98fb-774d6841da9e",
                                slug: "tools-and-resources",
                                title: "Tools & resources ",
                                template: "content",
                                breadcrumbs: true,
                                link: "/en/developers/tools-and-resources",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                            {
                              custom_title: "Developers blog",
                              custom_internal_link: "/posts/developers",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  title: "Ecosystem",
                  columns: [
                    {
                      blocks: [
                        {
                          title: "",
                          items: [
                            {
                              page: "0dc3d102-0936-433e-9219-f46e3087e396",
                              page_data: {
                                id: "0dc3d102-0936-433e-9219-f46e3087e396",
                                slug: "dapps",
                                title: "Dapps",
                                template: "landing",
                                breadcrumbs: false,
                                link: "/en/ecosystem/dapps",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                            {
                              page: "d202009a-3541-4366-b664-36ef2e492aa3",
                              page_data: {
                                id: "d202009a-3541-4366-b664-36ef2e492aa3",
                                slug: "wallets",
                                title: "Wallets",
                                template: "landing",
                                breadcrumbs: false,
                                link: "/en/ecosystem/wallets",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                            {
                              page: "5ddb6717-0d91-4d20-a18e-5bc487d54b57",
                              page_data: {
                                id: "5ddb6717-0d91-4d20-a18e-5bc487d54b57",
                                slug: "bridges-and-onramps",
                                title: "Bridges & on-ramps",
                                template: "landing",
                                breadcrumbs: false,
                                link: "/en/ecosystem/bridges-and-onramps",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                            {
                              page: "fd9c4d6e-aaee-42f0-abfc-ef5ffd3944ab",
                              page_data: {
                                id: "fd9c4d6e-aaee-42f0-abfc-ef5ffd3944ab",
                                slug: "block-explorers",
                                title: "Block explorers",
                                template: "landing",
                                breadcrumbs: false,
                                link: "/en/ecosystem/block-explorers",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "en",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  title: "Community",
                  columns: [
                    {
                      blocks: [
                        {
                          title: "START HERE",
                          items: [
                            {
                              custom_title: "Community Hub",
                              page: "683db5f6-c625-4fe0-a2af-3c5b6af8c2c9",
                              page_data: {
                                id: "683db5f6-c625-4fe0-a2af-3c5b6af8c2c9",
                                slug: "community",
                                title: "Community",
                                template: "landing",
                                breadcrumbs: true,
                                link: "/en/community",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "",
                              },
                            },
                          ],
                        },
                        {
                          title: "GET INVOLVED",
                          items: [
                            {
                              custom_internal_link: "/events",
                              custom_title: "Events",
                            },
                            {
                              custom_internal_link: "/jobs",
                              custom_title: "Jobs",
                            },
                            {
                              page: "3a3c4592-f9a7-4ccc-b672-50ea6a4ab2b3",
                              custom_title: "Governance",
                              page_data: {
                                id: "3a3c4592-f9a7-4ccc-b672-50ea6a4ab2b3",
                                slug: "governance",
                                title: "Governance",
                                template: "content",
                                breadcrumbs: true,
                                link: "/en/community/governance",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "",
                              },
                            },
                            {
                              custom_title: "Community forum",
                              custom_external_link:
                                "https://community.starknet.io/",
                            },
                            {
                              page: "d4d04818-2330-4c35-a33e-0f2bc3ca7e8f",
                              custom_title: "Online communities",
                              page_data: {
                                id: "d4d04818-2330-4c35-a33e-0f2bc3ca7e8f",
                                slug: "online-communities",
                                title: "Online communities",
                                template: "content",
                                breadcrumbs: true,
                                link: "/en/community/online-communities",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "",
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      blocks: [
                        {
                          title: "BLOG & MEDIA",
                          items: [
                            {
                              custom_title: "Content",
                              custom_internal_link: "/posts/",
                            },
                            {
                              custom_title: "Community & Events",
                              custom_internal_link: "/posts/community-and-events",
                              hide_from_footer: true,
                            },
                            {
                              custom_title: "Community Calls",
                              custom_internal_link: "/posts/community-calls",
                              hide_from_footer: true,
                            },
                            {
                              custom_title: "Ecosystem",
                              custom_internal_link: "/posts/ecosystem",
                              hide_from_footer: true,
                            },
                            {
                              custom_title: "Developers",
                              custom_internal_link: "/posts/developers",
                              hide_from_footer: true,
                            },
                            {
                              custom_title: "Foundation",
                              custom_internal_link: "/posts/foundation",
                              hide_from_footer: true,
                            },
                            {
                              custom_title: "Governance",
                              custom_internal_link: "/posts/governance",
                              hide_from_footer: true,
                            },
                            {
                              custom_title: "Stark Math",
                              custom_internal_link: "/posts/stark-math",
                              hide_from_footer: true,
                            },
                            {
                              custom_title: "Stark Struck",
                              custom_internal_link: "/posts/stark-struck",
                              hide_from_footer: true,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      blocks: [
                        {
                          title: "OTHER",
                          items: [
                            {
                              page: "9ef815e0-d670-404f-a97d-c5aebfe80a12",
                              page_data: {
                                id: "9ef815e0-d670-404f-a97d-c5aebfe80a12",
                                slug: "language-support",
                                title: "Language support",
                                template: "content",
                                breadcrumbs: true,
                                link: "/en/community/language-support",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "",
                              },
                            },
                            {
                              page: "575c22e7-477f-4a7e-9b90-7406b802176f",
                              page_data: {
                                id: "575c22e7-477f-4a7e-9b90-7406b802176f",
                                slug: "media-kit",
                                title: "Media kit",
                                template: "content",
                                breadcrumbs: true,
                                link: "/en/community/media-kit",
                                pageLastUpdated: false,
                                sourceFilepath: "",
                                locale: "",
                              },
                            },
                            {
                              custom_title: "Starknet EDU newsletter",
                              custom_external_link:
                                "https://starknet.substack.com/",
                            },
                            {
                              custom_title: "Starknet roundup newsletter",
                              custom_external_link:
                                "https://swagtimus.substack.com/",
                            },
                          ],
                        },
                        {
                          title: "SOCIAL",
                          items: [
                            {
                              custom_title: "youtube",
                              custom_icon: "SiYoutube",
                              custom_external_link:
                                "https://www.youtube.com/@starkware_ltd",
                            },
                            {
                              custom_title: "Discord",
                              custom_icon: "SiDiscord",
                              custom_external_link: "https://starknet.io/discord",
                            },
                            {
                              custom_icon: "SiGithub",
                              custom_title: "Github",
                              custom_external_link:
                                "https://github.com/starknet-io/starknet-website",
                            },
                            {
                              custom_internal_link: "",
                              custom_icon: "SiTwitter",
                              custom_title: "Twitter",
                              custom_external_link:
                                "https://twitter.com/@Starknet_edu",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            }}
            seo={{
              footerText: "Built with ✨ by the Starknet community.",
            }}
          />
        </HStack>
    </ColorModeProvider>
);
