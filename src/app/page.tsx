
"use client"
import Header from "@/components/header";
import Container from "@/components/container";
import Profile from "@/components/Profile";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <Container>
      <Header />
      <Profile />
      <Gallery />
    </Container>
  );
}