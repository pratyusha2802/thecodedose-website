import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import './socialLinks.scss';

export default function () {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            instagram
            twitter
            redbubble
            github
            discord
            youtube
          }
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: {
        social: {
          instagram, redbubble, twitter, github, discord, youtube,
        },
      },
    },
  } = data;

  return (
    <div className="site-footer__right">
      <div>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/cs-illustrated">CS Illustrated</Link>
        <Link to="https://forms.gle/KVFTHZYj3dXnanRV9">
          Apply for next React Cohort
        </Link>
        <a href={redbubble} target="__blank">
          Shop
        </a>
      </div>
      <div>
        <a href={instagram} target="__blank">
          Instagram
        </a>
        <a href={discord} target="__blank">
          Discord
        </a>
        <a href={twitter} target="__blank">
          Twitter
        </a>
        <a href={youtube} target="__blank">
          YouTube
        </a>
        <a href={github} target="__blank">
          Github
        </a>
      </div>
    </div>
  );
}
