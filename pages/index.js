import Head from "next/head";
import styles from "../styles/home.module.css";

import { useState, useEffect } from "react";

import MainSection from "@/components/main-section/main-section";
import CredentialSection from "@/components/credential-section/credential-section";
import AboutSection from "@/components/about-section/about-section";
import TimelineSection from "@/components/timeline-section/timeline-section";
import W4Section from "@/components/who-we-work-with-section/w4-section";
import HWSection from "@/components/how-we-work-section/hww-section";
import Footer from "@/components/footer/footer";

import Topbar from "@/components/topbar/topbar";

import Navbar from "@/components/navbar/navbar";
import Topbar2 from "@/components/topbar 2/topbar2";

import { useRouter } from "next/router";

export default function Home() {
  const active = [styles.navbar];
  const inactive = [styles.hideNavbar];

  const [visibility, setVisibility] = useState(inactive);

  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [topbar2, setTopbar2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    console.log(window.scrollY);
  };

  useEffect(() => {
    if (clientWindowHeight > 10) {
      setTopbar2(true);
    } else {
      setTopbar2(false);
    }
  }, [clientWindowHeight]);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={visibility}>
        <Navbar
          onclick={() => {
            setVisibility(inactive);
          }}
          about={() => {
            router.push("/#about");
            setVisibility(inactive);
          }}
          w4={() => {
            router.push("/#w4");
            setVisibility(inactive);
          }}
          timeline={() => {
            router.push("/#timeline");
            setVisibility(inactive);
          }}
          hw={() => {
            router.push("/#hw");
            setVisibility(inactive);
          }}
        />
      </div>

      {topbar2 ? (
        <div className={styles.topbar2}>
          <Topbar2
            onclick={() => {
              setVisibility(active);
            }}
          />
        </div>
      ) : (
        <div className={styles.topbar}>
          <Topbar
            onclick={() => {
              setVisibility(active);
            }}
          />
        </div>
      )}

      <div className={styles.display}>
        <div className={styles.main}>
          <MainSection />
        </div>

        <div className={styles.content}>
          <div id="credential">
            <CredentialSection />
          </div>

          <div id="about">
            <AboutSection />
          </div>

          <div id="w4">
            <W4Section />
          </div>

          <div id="timeline">
            <TimelineSection />
          </div>

          <div id="hw">
            <HWSection />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
