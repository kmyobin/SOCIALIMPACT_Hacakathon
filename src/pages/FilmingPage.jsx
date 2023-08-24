import React from "react";
import PageTemplate from "../layout/PageTemplate";
import FilmingContent from "../components/filming/FilmingContent";

export default function FilmingPage() {
  return <PageTemplate content={<FilmingContent />} />;
}
