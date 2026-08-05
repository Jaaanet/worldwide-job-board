"use client";

import { useMemo, useState } from "react";

type JobBoard = {
  name: string;
  url: string;
  region: string;
  coverageRegions?: string[];
  focus: string;
  type: string;
  goodFor: string;
  notes: string;
};

type DirectoryClientProps = {
  jobBoards: JobBoard[];
};

const regionOrder = [
  "All",
  "Global",
  "United States",
  "Canada",
  "United Kingdom",
  "Europe",
  "Australia",
  "India",
  "Asia Pacific",
  "China",
  "Middle East",
  "Africa",
  "Latin America",
];

const focusOrder = [
  "All",
  "General",
  "Remote",
  "Tech",
  "Startup",
  "Campus",
  "Freelance",
  "Company research",
];

export function DirectoryClient({ jobBoards }: DirectoryClientProps) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [focus, setFocus] = useState("All");

  const regions = useMemo(() => {
    const found = new Set(jobBoards.map((board) => board.region));
    return regionOrder.filter((item) => item === "All" || found.has(item));
  }, [jobBoards]);

  const focuses = useMemo(() => {
    const found = new Set(jobBoards.map((board) => board.focus));
    return focusOrder.filter((item) => item === "All" || found.has(item));
  }, [jobBoards]);

  const filteredBoards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return jobBoards.filter((board) => {
      const matchesRegion =
        region === "All" ||
        board.region === region ||
        (board.region === "Global" && region !== "Global" && Boolean(board.coverageRegions?.includes(region)));
      const matchesFocus = focus === "All" || board.focus === focus;
      const searchable = [
        board.name,
        board.region,
        board.focus,
        board.type,
        board.goodFor,
        board.notes,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesRegion && matchesFocus && matchesQuery;
    });
  }, [focus, jobBoards, query, region]);

  const featured = jobBoards.filter((board) =>
    ["LinkedIn Jobs", "Indeed", "Glassdoor", "Wellfound", "We Work Remotely", "SEEK"].includes(board.name),
  );

  return (
    <main>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">Worldwide job-search map</p>
            <h1>A world wide job search websites.</h1>
            <p className="hero__lead">
              A practical directory of job boards, aggregators, remote-work sites,
              startup networks, campus portals, freelance marketplaces, and regional
              career sites, including overlapping sources so fewer niche postings slip by.
            </p>
          </div>
          <div className="hero__panel" aria-label="Directory summary">
            <div>
              <strong>{jobBoards.length}</strong>
              <span>sites listed</span>
            </div>
            <div>
              <strong>{regions.length - 1}</strong>
              <span>regions</span>
            </div>
            <div>
              <strong>{focuses.length - 1}</strong>
              <span>search focuses</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section featured-section" aria-labelledby="featured-title">
        <div className="section__header">
          <p className="eyebrow">Start here</p>
          <h2 id="featured-title">Core websites most job searches should check</h2>
        </div>
        <div className="featured-grid">
          {featured.map((board) => (
            <a className="featured-link" href={board.url} key={board.name} target="_blank" rel="noreferrer">
              <span>{board.name}</span>
              <small>{board.focus} · {board.region}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="directory" aria-labelledby="directory-title">
        <div className="directory__toolbar">
          <div>
            <p className="eyebrow">Directory</p>
            <h2 id="directory-title">Find the right job board</h2>
          </div>
          <p className="result-count">{filteredBoards.length} matching sites</p>
        </div>

        <div className="filters" aria-label="Directory filters">
          <label className="search-field">
            <span>Search</span>
            <input
              type="search"
              placeholder="Try remote, Canada, startup, data, freelance..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label>
            <span>Region</span>
            <select value={region} onChange={(event) => setRegion(event.target.value)}>
              {regions.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Focus</span>
            <select value={focus} onChange={(event) => setFocus(event.target.value)}>
              {focuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className="clear-button"
            onClick={() => {
              setQuery("");
              setRegion("All");
              setFocus("All");
            }}
          >
            Reset
          </button>
        </div>

        <div className="board-grid">
          {filteredBoards.map((board) => (
            <article className="board-card" key={`${board.name}-${board.region}`}>
              <div className="board-card__top">
                <div>
                  <p className="board-card__region">{board.region}</p>
                  <h3>{board.name}</h3>
                </div>
                <a href={board.url} target="_blank" rel="noreferrer" aria-label={`Open ${board.name}`}>
                  Visit
                </a>
              </div>
              <div className="tags">
                <span>{board.focus}</span>
                <span>{board.type}</span>
                {region !== "All" && board.region === "Global" && board.coverageRegions?.includes(region) ? (
                  <span>Covers {region}</span>
                ) : null}
              </div>
              <p>{board.goodFor}</p>
              <small>{board.notes}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
