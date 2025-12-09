"use client";
import { useState } from "react";
import "./style.css";
import Link from "next/link";
const items = [
  {
    title: "Lorem ipsum dolor self amet, consectetur",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Lorem ipsum dolor self amet, consectetur",
    body:
      "Second item content goes here. You can change this later.",
  },
  {
    title: "Lorem ipsum dolor self amet, consectetur",
    body:
      "Third item content goes here. You can change this later.",
  },
  {
    title: "Lorem ipsum dolor self amet, consectetur",
    body:
      "Fourth item content goes here. You can change this later.",
  },
  {
    title: "Lorem ipsum dolor self amet, consectetur",
    body:
      "Fifth item content goes here. You can change this later.",
  },
];
export default function BlogPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white page-bg">
        <section className="text-center px-4">
          <p className="mb-4 text-sm font-medium text-orange-500">Resources</p>

          <h1 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-black">
            Lorem ipsum dolor
            <br />
            sit amet consectetur
          </h1>

          <p className="max-w-xl mx-auto mb-8 text-base md:text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-2.5 text-sm font-medium text-black shadow-sm hover:bg-gray-50 top-mar1">
            CTA Button
          </button>
        </section>
      </div>

      <section className="w-full flex justify-center bg-white">
        <div className="w-full max-w-5xl">
          <h2 className="mb-6 title">
            Lorem ipsum
            <br />
            dolor self amet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <article
                key={i}
                className="text-left text-sm text-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.06)] bg-white overflow-hidden"
              >      <div className="w-full bg-[#f5f5f5]">
                  <img
                    src="/dummy/test.png"
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="mb-1 subtile">
                    Lorem ipsum dolor slef amet
                  </h3>
                  <p className="mb-2 text-xs text-gray-500 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link href="/blog/example-post" className="footer">
                    Learn more about lorem ipsum &gt;
                  </Link>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
      <section className="w-full flex justify-center bg-white py-16">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-0">
          <div
            className="min-h-[420px] bg-[url('/dummy/test.png')] bg-[length:40px_40px] bg-repeat flex items-start"
          >
            <div className="p-8">
              <p className="righttitle">
                Lorem ipsum dolor
                <br />
                sit amet
                <br />
                consectetur
                <br />
                Lorem ipsum dolor
                <br />
                sit
              </p>
              <p className="mt-4 rightsubtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="bg-[#FFF7EE] flex items-start">
            <div className="p-8">
              <p className="righttitle">
                Lorem ipsum dolor
                <br />
                sit amet
              </p>
              <p className="mt-4 rightsubtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-white">
        <div className="w-full max-w-5xl">
          <h2 className="mb-6 title">
            Lorem ipsum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <article
                key={i}
                className="text-left text-sm text-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.06)] bg-white overflow-hidden"
              >
                <div className="w-full bg-[#f5f5f5]">
                  <img
                    src="/dummy/test.png"
                    alt=""
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="mb-1 subtile">
                    Lorem ipsum dolor slef amet
                  </h3>
                  <p className="mb-2 text-xs text-gray-500 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link href="/blog/example-post" className="footer">
                    Learn more about lorem ipsum &gt;
                  </Link>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center bg-white py-20">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="faqtitle mb-3">Lorem ipsum</p>
            <h2 className="subtitlefaq mb-4">
              Lorem ipsum dolore
              <br />
              self amet consectetur alt
            </h2>
            <p className="subsubfaq max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="space-y-3">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-[14px] border border-gray-200 bg-white overflow-hidden ${isOpen ? "shadow-[0_8px_24px_rgba(0,0,0,0.06)]" : ""
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-5 py-3 text-left subtile"
                  >
                    <span className="head">{item.title}</span>
                    <span className="text-xl leading-none head1">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 bg-[#F7F7F7] text-xs discription">
                      {item.body}
                      <button className="mt-3 block text-xs font-medium lear text-orange-500">
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
