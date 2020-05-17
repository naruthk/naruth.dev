import React, { useState } from "react";

import Container from "./container";
import Link from "./link";
import Logo from "./ui/logo";
import Share from "./share/share";
import Modal from "./ui/modal";

import { ROUTES } from "../utils/routes";

import styled from '@emotion/styled';
import { FiMenu } from 'react-icons/fi';
import tw from "twin.macro";

const NavWrapper = styled.nav`
  ${tw`flex flex-row justify-between`}
`;

const SiteNavLinks = styled.div`
  button, a {
    ${tw`mx-4 px-2 py-4`}
  }
  a[aria-current="page"] {
    ${tw`border-b-2 border-solid border-gray-900 font-bold`}
  }
  .desktop-only {
    ${tw`hidden md:inline-block cursor-pointer`}
  }
  .mobile-only {
    ${tw`md:hidden`}
  }
`;

const MenuOverlayContent = styled.div`
  ${tw`flex flex-col flex-wrap justify-around h-full mx-4`}
  a, a:visited {
    ${tw`text-white`}
  }
  .cta-message {
    ${tw`block text-gray-600 leading-normal md:text-left text-base xl:text-lg font-semibold mb-6`}
  }
  .email-link {
    ${tw`text-xl md:text-left md:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-normal`}
  }
  .sharing-navigation {
    ${tw`pt-2 border-t-2 border-solid border-gray-900`}
  }
`;

const Header = () => {
  const [showModalOverlay, setShowModalOverlay] = useState(false);
  const navOrder = [ROUTES.BLOG, ROUTES.PROJECT, ROUTES.ABOUT];

  return (
    <>
      <Container>
        <NavWrapper>
          <Logo />
          <SiteNavLinks>
            {navOrder.map(item => 
              <Link
                key={item.name}
                className="desktop-only"
                href={item.url}
                title={item.name}
              >
                {item.name}
              </Link>
            )}
            <Link
              className="desktop-only"
              title="Contact"
              onClick={() => setShowModalOverlay(true)}
            >
              {ROUTES.CONTACT.name}
            </Link>
            <Link
              className="mobile-only"
              title="Hamburger Menu"
              onClick={() => setShowModalOverlay(true)}
            >
              <FiMenu />
            </Link>
          </SiteNavLinks>
        </NavWrapper>
      </Container>

      {/* Modal expands full screen on mobile screen size */}
      <Modal isActive={showModalOverlay} setActive={setShowModalOverlay}>
        <MenuOverlayContent>
          <div>
            {navOrder.map(item => 
              <h1 key={item.name}>
                <Link href={item.url} title={item.name}>
                  {item.name}
                </Link>
              </h1>
            )}
          </div>
          <div>
            <p className="cta-message">Send your message to</p>
            <p className="email-link">
              <Link isExternal href="mailto:nkongurai@gmail.com" title="Send a message">
                nkongurai@gmail.com
              </Link>
            </p>
          </div>
          <div className="sharing-navigation">
            <Share />
          </div>
        </MenuOverlayContent>
      </Modal>
    </>
  );
};

export default Header;
