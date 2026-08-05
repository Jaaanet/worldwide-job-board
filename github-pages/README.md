# Worldwide Job Board Directory

A searchable directory of worldwide job-search websites, including global job boards, regional job platforms, remote-work sites, startup job boards, university/campus career portals, and freelance marketplaces.

## Live Demo

[View the live website](https://Jaaanet.github.io/worldwide-job-board/)

## Project Overview

Job postings are spread across many different platforms. Large job boards such as LinkedIn and Indeed are useful, but they do not always cover every country, university, niche industry, or early-career opportunity equally.

This project organizes job-search websites into one searchable directory so users can discover more places to search for jobs, internships, co-ops, remote roles, freelance work, and campus opportunities.

The directory intentionally includes overlapping sources because different platforms may contain different postings.

## Features

- Search job-search websites by keyword
- Filter websites by region
- Filter websites by focus area:
  - General job boards
  - Remote jobs
  - Tech jobs
  - Startup jobs
  - Campus/university jobs
  - Freelance marketplaces
  - Company research platforms
- Region-aware filtering for global platforms
- Global job boards only appear under a region when they have relevant coverage for that region
- Direct links to each job-search website
- Fully static website
- Deployable for free with GitHub Pages

## Why I Built This

During the job search process, I noticed that relying on only one or two large job boards can cause candidates to miss opportunities. Some jobs are posted only on university portals, regional platforms, government job banks, startup networks, or freelance marketplaces.

I built this project to make job-source discovery easier and more systematic.

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## How It Works

The website stores job-search platforms as structured data in JavaScript. Each platform includes information such as:

- Website name
- URL
- Region
- Coverage regions
- Focus category
- Platform type
- Notes about best use cases

The filtering logic checks both the selected region and the platform's coverage. For example, a platform marked as `Global` will not automatically appear under every region. It only appears when that region is included in its coverage list.

## Project Structure

```text
worldwide-job-board/
├── index.html
└── README.md
