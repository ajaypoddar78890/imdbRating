import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie bg-gray-900 text-white min-h-screen">
      {/* Movie Intro */}
      <div className="movie__intro relative">
        <img
          className="movie__backdrop w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt="Backdrop"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-48"></div>
      </div>

      {/* Movie Detail Section */}
      <div className="movie__detail container mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section - Movie Poster */}
        <div className="movie__detailLeft">
          <div className="movie__posterBox mb-8 md:mb-0">
            <img
              className="movie__poster w-full h-[70vh] object-cover rounded-md shadow-lg"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt="Poster"
            />
          </div>
        </div>

        {/* Right Section - Movie Details */}
        <div className="movie__detailRight text-lg">
          {/* Movie Name and Tagline */}
          <div className="movie__name text-3xl font-semibold mb-2">
            {currentMovieDetail ? currentMovieDetail.original_title : ""}
          </div>
          <div className="movie__tagline text-xl text-gray-400 mb-4">
            {currentMovieDetail ? currentMovieDetail.tagline : ""}
          </div>

          {/* Rating and Vote Count */}
          <div className="movie__rating flex items-center mb-4">
            <span className="text-yellow-400 text-lg mr-2">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}
              <i className="fas fa-star"></i>
            </span>
            <span className="movie__voteCount text-gray-400 text-sm">
              {currentMovieDetail
                ? `(${currentMovieDetail.vote_count}) votes`
                : ""}
            </span>
          </div>

          {/* Runtime and Release Date */}
          <div className="movie__runtime mb-4">
            {currentMovieDetail ? `${currentMovieDetail.runtime} mins` : ""}
          </div>
          <div className="movie__releaseDate mb-4">
            {currentMovieDetail
              ? `Release date: ${currentMovieDetail.release_date}`
              : ""}
          </div>

          {/* Genres */}
          <div className="movie__genres flex flex-wrap gap-2 mb-6">
            {currentMovieDetail && currentMovieDetail.genres
              ? currentMovieDetail.genres.map((genre) => (
                  <span
                    className="movie__genre bg-gray-800 text-white py-1 px-3 rounded-lg"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))
              : ""}
          </div>

          {/* Synopsis */}
          <div className="movie__detailRightBottom">
            <div className="synopsisText text-xl font-semibold mb-2">
              Synopsis
            </div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
          {/* Useful Links Section */}
          <div className="movie__links container mx-auto px-4 py-8">
            <div className="movie__heading text-2xl font-semibold mb-4">
              Useful Links
            </div>
            {currentMovieDetail && currentMovieDetail.homepage && (
              <a
                href={currentMovieDetail.homepage}
                target="_blank"
                rel="noreferrer"
                className="movie__homeButton text-blue-400 hover:underline flex items-center"
              >
                Homepage <i className="fas fa-external-link-alt ml-2"></i>
              </a>
            )}
            {currentMovieDetail && currentMovieDetail.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
                target="_blank"
                rel="noreferrer"
                className="movie__imdbButton text-blue-400 hover:underline flex items-center mt-2"
              >
                IMDB <i className="fas fa-external-link-alt ml-2"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Production Companies */}
      <div className="movie__heading text-2xl font-semibold px-4 py-4 text-center">
        Production Companies
      </div>
      <div className="movie__production flex flex-wrap justify-center gap-8 px-4 py-8">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <div
              key={company.id}
              className="productionCompany flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ease-in-out duration-300"
            >
              {company.logo_path && (
                <img
                  className="movie__productionCompany w-36 h-36 object-contain mb-4"
                  src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                  alt={company.name}
                />
              )}
              <span className="text-xl font-medium text-gray-300">
                {company.name}
              </span>
            </div>
          ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Movie;
