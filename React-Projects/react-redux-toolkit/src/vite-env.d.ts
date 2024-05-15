/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PATH_TO_SERVER: string;
    // more env variables...
  }
   
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
   
  //use: import.meta.env.VITE_PATH_TO_SERVER
