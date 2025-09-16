--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Debian 17.4-1.pgdg120+2)
-- Dumped by pg_dump version 17.4 (Debian 17.4-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."user" (id, email, name, address, "createdAt", "updatedAt") FROM stdin;
679079fb-f8ee-4160-8506-d347a907f44e	adinmm29@gmail.com	Adinmm	Hallo Banggg!!!!	2025-09-16 03:30:13.607	2025-09-16 03:30:13.607
5ef93d51-94ec-4313-91ed-21cdd181e842	muhammadmuayyadin@gmail.com	Ad	Hallo Banggg!!!!	2025-09-16 04:45:40.16	2025-09-16 04:45:40.16
\.


--
-- PostgreSQL database dump complete
--

