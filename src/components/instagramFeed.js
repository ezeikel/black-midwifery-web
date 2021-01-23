import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Heading from "./Heading";

const INSTAGRAM_API_URL =
  "https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables=%7B%22id%22%3A%2227548136075%22%2C%22first%22%3A12%2C%22after%22%3A%22%22%7D";

const Wrapper = styled.div`
  > div:first-of-type {
    display: flex;
    flex-direction: column;
    img + img {
      margin-top: var(--spacing-large);
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      grid-gap: var(--spacing-large);

      img + img {
        margin-top: 0;
      }
    }
  }
`;

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const {
        data: {
          data: {
            user: {
              edge_owner_to_timeline_media: { edges },
            },
          },
        },
      } = await axios.get(INSTAGRAM_API_URL);

      setPosts(edges);
      console.log({ edges });
    };

    fetchPosts();
  }, []);

  return (
    <Wrapper>
      <Heading text="Black Midwifery on Instagram" />
      <div>
        {posts.map(({ node: { display_url } }) => (
          <img src={display_url} />
        ))}
      </div>
    </Wrapper>
  );
};

export default InstagramFeed;
