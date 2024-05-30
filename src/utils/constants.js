
export const BACKGROUND_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export const USER_AVATAR = "https://www.clipartkey.com/mpngs/m/80-809592_transparent-profile-clipart-user-vector-icon-png.png";



export const API_OPTIONS =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGNlZGQ5NmEwNDdiYzM2MzZiODc3YzQxOTRlYjQ1MyIsInN1YiI6IjY2MjhmNTY1YTM5ZDBiMDE3MDQ3ZGZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.se1UZR5j-_e7PMveYjqRpRbz60lI8rt_VJGB-mbZjVU'

    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
  
  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
  ];
  


  

  export const OPEN_AI_SECRET_KEY = process.env.REACT_APP_OPEN_AI_SECRET_KEY;