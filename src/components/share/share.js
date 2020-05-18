import React from "react"
import PropTypes from "prop-types";

import Link from "../link";
import { transition } from "../../utils/styles";
import useSiteMetadata from '../../hooks/use-site-metadata';

import {
  SOCIAL_NETWORK_PROFILE_MAP,
  ARTICLE_SHARE_INFO_MAP
} from "./constants";

import styled from "@emotion/styled";
import tw from "twin.macro";

const ShareWrapper = styled.section`
  .footer-social-navigation {
    ${tw`text-center`}
    ul {
      ${tw`flex list-none`}
    }
    li {
      ${tw`mr-6 ml-0`}
    }
    a {
      ${tw`text-white text-2xl opacity-75`}
      transition: ${transition};
      :hover {
        ${tw`opacity-100`}
      }
    }
  }
`;

const ArticleSharingWrapper = styled.div`
  ${tw`text-xl mr-2`}
  button {
    ${tw`align-text-top text-center cursor-pointer mx-2`}
    :hover {
      ${tw`text-blue-400`}
    }
  }
`;

const renderArticleSharingLinks = url => {
  const { facebook, twitter } = ARTICLE_SHARE_INFO_MAP;

  return (
    <ArticleSharingWrapper>
      <Link
        className="facebook"
        onClick={e => {
          e.preventDefault();
          window.open(
            facebook.url + encodeURIComponent(url),
            "Share on Facebook",
            "width=626, height=436"
          );
        }}
      >
        {facebook.icon}
      </Link>
      <Link
        className="twitter"
        onClick={e => {
          e.preventDefault();
          window.open(
            twitter.url + encodeURIComponent(url),
            "Share on Twitter",
            "height=320, width=500"
          );
        }}
      >
        {twitter.icon}
      </Link>
    </ArticleSharingWrapper>
  );
};

const SocialNetworkSharing = ({ isFloatingHeader, pathName }) => {
  const { siteUrl } = useSiteMetadata();
  const currentPageUrl = `${siteUrl}${pathName}`;

  return (
    <ShareWrapper>
      {isFloatingHeader ? renderArticleSharingLinks(currentPageUrl) : (
        <nav className="footer-social-navigation">
          <ul>
          {Object.values(SOCIAL_NETWORK_PROFILE_MAP).map(link => (
            <li key={link.name}>
              <Link isExternal href={link.url} title={`Naruth Kongurai's ${link.name}`}>
                {link.icon}
              </Link>
            </li>
          ))}
          </ul>
        </nav>
      )}
    </ShareWrapper>
  );
};

SocialNetworkSharing.propTypes = {
  isFloatingHeader: PropTypes.bool,
  pathName: PropTypes.string.isRequired
};

SocialNetworkSharing.propTypes = {
  isFloatingHeader: false
};

export default SocialNetworkSharing;