import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

function ContactBar() {
  return (
    <section className="z-[50] flex w-full flex-wrap items-center justify-center bg-black">
      <section className="flex w-full max-w-theme flex-wrap items-center justify-between gap-5 p-2">
        <section className="hidden flex-row items-center justify-center gap-3 text-xs text-white md:flex lg:flex">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <BsTwitter className="h-4 w-4" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <BsFacebook className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <BsInstagram className="h-4 w-4" />
          </a>
        </section>
        <section className="flex flex-wrap items-center justify-center gap-3">
          <a
            className="text-center text-xs text-white"
            href="tel:+90 212 486 37 73"
          >
            +90 212 486 37 73
          </a>
          <span className="text-xs text-white">|</span>
          <a
            className="text-center text-xs text-white"
            href="mailto:info@muratgeridonusum.com"
          >
            info@muratgeridonusum.com
          </a>
        </section>
      </section>
    </section>
  );
}

export default ContactBar;
