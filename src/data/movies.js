import f from '../components/images/1 katta.jpg'
import s from '../components/images/1 kichik.jpg'
import z from '../components/images/2 katta.jpg'
import z2 from '../components/images/2 kichik.jpg'
import q3 from '../components/images/3 katta.jpg'
import qq3 from '../components/images/3 kichik.jpg'
import q from '../components/images/4.jpg'
import w from '../components/images/5.jpg'
import e from '../components/images/6.jpg'
import r from '../components/images/7.jpg'
import t from '../components/images/8.jpg'
import y from '../components/images/9.jpg'
import u from '../components/images/10.jpg'
import i from '../components/images/11.jpg'
import o from '../components/images/12.jpg'
import p from '../components/images/13.jpg'
import a from '../components/images/27.jpg'
import ss from '../components/images/15.jpg'
import d from '../components/images/16.jpg'
import ff from '../components/images/17.jpg'
import g from '../components/images/18.jpg'
import h from '../components/images/19.jpg'
import j from '../components/images/20.jpg'
import k from '../components/images/21.jpg'
import l from '../components/images/22.jpg'
import zz from '../components/images/23.jpg'
import x from '../components/images/24.jpg'
import c from '../components/images/25.jpg'
import v from '../components/images/26.jpg'
import b from '../components/images/27.jpg'
import n from '../components/images/26.jpg'

const movies = [
  {
    id: 1,
    title: "Beyond Earth",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isTrending: true,
    isBookmarked: false,
    thumbnail: f,
    thumbnailLarge: s,
  },
  {
    id: 2,
    title: "Bottom Gear",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isTrending: true,
    isBookmarked: false,
    thumbnail: z,
    thumbnailLarge: z2,
  },
  {
    id: 3,
    title: "Undiscovered Cities",
    year: 2019,
    category: "TV Series",
    rating: "E",
    isTrending: true,
    isBookmarked: false,
    thumbnail: q3,
    thumbnailLarge:qq3,
  },
  {
    id: 4,
    title: "The Great Lands",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: q,
  },
  {
    id: 5,
    title: "The Diary",
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: w,
  },
  {
    id: 6,
    title: "Earth's Untouched",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isTrending: false,
    isBookmarked: false,
    thumbnail: e,
  },
  {
    id: 7,
    title: "No Land Beyond",
    year: 2019,
    category: "Movie",
    rating: "E",
    isTrending: false,
    isBookmarked: false,
    thumbnail: r,
  },
  {
    id: 8,
    title: "During The Hunt",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: t,
  },
  {
    id: 9,
    title: "Autosport The Series",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: y,
  },
  {
    id: 10,
    title: "Same Answer II",
    year: 2017,
    category: "Movie",
    rating: "E",
    isTrending: false,
    isBookmarked: false,
    thumbnail: u,
  },
  {
    id: 11,
    title: "Below Echo",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: i,
  },
  {
    id: 12,
    title: "The Rockies",
    year: 2015,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: o,
  },
  {
    id: 13,
    title: "Relentless",
    year: 2016,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: true,
    thumbnail: p,
  },
  {
    id: 14,
    title: "Off The Track",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: true,
    thumbnail: a,
  },
  {
    id: 15,
    title: "Borderless",
    year: 2018,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: ss,
  },
  {
    id: 16,
    title: "Community of Ours",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: d,
  },
  {
    id: 17,
    title: "Whispering Hill",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: ff,
  },
  {
    id: 18,
    title: "122",
    year: 2018,
    category: "Movie",
    rating: "18+",
    isTrending: false,
    isBookmarked: false,
    thumbnail:g ,
  },
  {
    id: 19,
    title: "The Hostess",
    year: 2018,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: true,
    thumbnail: h,
  },
  {
    id: 20,
    title: "Lone Heart",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: true,
    thumbnail:j ,
  },
  {
    id: 21,
    title: "Production Line",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: k,
  },
  {
    id: 22,
    title: "Dogs",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: true,
    thumbnail: l,
  },
  {
    id: 23,
    title: "Van Life",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: zz,
  },
  {
    id: 24,
    title: "Dark Side of the Moon",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail:x ,
  },
  {
    id: 25,
    title: "Darker",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isTrending: false,
    isBookmarked: true,
    thumbnail: c,
  },
  {
    id: 26,
    title: "Mission: Saturn",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isTrending: false,
    isBookmarked: true,
    thumbnail: v,
  },
  {
    id: 27,
    title: "Unresolved Cases",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isTrending: false,
    isBookmarked: false,
    thumbnail: b,
  },
  {
    id: 28,
    title: "The Tasty Tour",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isTrending: false,
    isBookmarked: false,
    thumbnail: n,
  },
];

export default movies;
