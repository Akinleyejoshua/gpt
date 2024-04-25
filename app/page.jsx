import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PromptSection } from "@/layouts/PromptSection";
import Image from "next/image";

export default function Home() {
  
  
  return (
    <main>
      <Header/>
      <Body/>
      <PromptSection/>
      <Footer/>
    </main>
  );
}
