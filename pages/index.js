//importaciones
import React from "react";

//componentes
import Layout from "../components/Layout/Layout";
import Results from "../components/Results/Results";

//utils
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <Layout title="Home | Hulu Clone App" description="Home | Hulu Clone App">
      <Results results={results} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
